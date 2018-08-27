import { Component, OnInit } from '@angular/core';

import {Global} from '../util/Global';
import {ContactoService} from '../services/contacto.service'
import {Router,ActivatedRoute,Params} from '@angular/router'
import { FormsModule } from '@angular/forms';
import {Contacto} from '../contacto/contacto';

@Component({
  selector: 'app-contacto-detail',
  templateUrl: './contacto-detail.component.html',
  styleUrls: ['./contacto-detail.component.css'],
  providers:[ContactoService]
})
export class ContactoDetailComponent implements OnInit {

  public titulo:string;
  public _contacto:Contacto;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _contactoService: ContactoService
  ) { 
    this.titulo="Detalle del Contacto";
  }

  ngOnInit() {
    this.getProducto();
  }

  getProducto(){
    //obtengo el id del request
    this._route.params.forEach((params:Params)=>{
        let id = params['id'];
       
        this._contactoService.getContactByID(id).subscribe(
          result =>{
              this._contacto=result;
          },
          error => {
            console.log("error getProducto :: " + <any>error);
          }
        );
    });
  }

}
