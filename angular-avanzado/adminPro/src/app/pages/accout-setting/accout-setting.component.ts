import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingService } from '../../services/service.index';

@Component({
  selector: 'app-accout-setting',
  templateUrl: './accout-setting.component.html',
  styleUrls: ['./accout-setting.component.css']
})
export class AccoutSettingComponent implements OnInit {

  
  constructor( @Inject(DOCUMENT) private _document ,
              public _ajuste: SettingService
  ) { }

  ngOnInit() {
    this.limpiarCheck();
    this.colocarCheck();
  }

  limpiarCheck(){
    let selectores:any=document.getElementsByClassName('selector');
    for(let ref of selectores){
       ref.classList.remove('working');
    }
  }

  cambiarColor(tema:string,link:any){   
    this.aplicarCheck(link); 
    this._ajuste.aplicarTema(tema);  
  }

  aplicarCheck(link:any){
     let selectores:any=document.getElementsByClassName('selector');
     for(let ref of selectores){
        ref.classList.remove('working');
     }
     link.classList.add('working');    
   }

   colocarCheck(){
    let selectores:any=document.getElementsByClassName('selector');
    let tema = this._ajuste.ajustes.tema;

    for(let ref of selectores){
      if(ref.getAttribute('data-theme')===tema){
        ref.classList.add('working');
        break;
      }      
    }
   }
}
