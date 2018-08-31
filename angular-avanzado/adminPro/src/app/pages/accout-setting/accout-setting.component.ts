import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingService } from '../../services/setting.service';


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
}
