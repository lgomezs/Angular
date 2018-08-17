import { Component } from '@angular/core';

import {Router,ActivatedRoute,Params} from '@angular/router'
import {ContactoService} from '../services/contacto.service'
import { Container } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  providers : [ContactoService]
})
export class ContactoComponent {
  title = 'Pagina de Contacto';
  public parametros; 
  public listado_contacto:Array<String>;
  public prenda_guardar:string;
  public fecha;

  constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _contactoService: ContactoService
  ){
    this.fecha =  Date.now();
  }

  ngOnInit(){
      //recoger los parametros de la URL
    this._route.params.forEach((params : Params) =>{
            this.parametros =params['id'];
            console.log('parametros '+  this.parametros);
    });

   this.listado_contacto=this._contactoService.getContacto();
   //console.log("call servicio : " + this._contactoService.nombreContacto);
   console.log("call listado_contacto : " + this.listado_contacto);
  }

  public redirigir(){
      this._router.navigate(['/contacto','lgomezs']);
  }

  agregarContacto(){
      this._contactoService.addContacto(this.prenda_guardar);
      this.prenda_guardar=null;
  }

  eliminarPrenda(index:number){
    this._contactoService.deleteContacto(index);
  }

}
