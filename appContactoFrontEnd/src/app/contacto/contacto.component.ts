import { Component, OnInit } from '@angular/core';
import {Global} from '../util/Global';
import {ContactoService} from '../services/contacto.service'
import {Router,ActivatedRoute,Params} from '@angular/router'
import { Contacto } from './contacto';
import {DataTableModule} from "angular-6-datatable";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  providers: [ContactoService]
})
export class ContactoComponent implements OnInit {

  public titulo:string;
  public array_contacto:Contacto[];
  public confirmado;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _contactoService: ContactoService
  ) {
     this.titulo="Contact List";
   }


  ngOnInit() {   
    this.loadListContact();
  }

  loadListContact(){
    this._contactoService.getContact().subscribe(
      result =>{
          if(result.code!=200){
            console.log("data ok es : " + result);
            this.array_contacto=result;             
          }          
      },
      error=>{
          console.log("error obtenido :: " + <any>error);
      }
  );
  }

  deleteContact(id:string){
    this.confirmado=id;    
  }

  cancelarConfirm(){
    this.confirmado=null;    
  }

  onDeleteContactConfirm(id:string){
    this._contactoService.deleteContact(id).subscribe(
        result => {
          this.loadListContact();
          console.log("contacto eliminado");
        },
        error => {
          console.log("error deleteContact :: " + <any>error);
        }
    );
  }
}
