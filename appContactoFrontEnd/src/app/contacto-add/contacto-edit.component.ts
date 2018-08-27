import { Component, OnInit } from '@angular/core';

import {Global} from '../util/Global';
import {ContactoService} from '../services/contacto.service'
import {Router,ActivatedRoute,Params} from '@angular/router'
import { FormsModule } from '@angular/forms';
import {Contacto} from '../contacto/contacto';

@Component({
  selector: 'app-contacto-add',
  templateUrl: './contacto-add.component.html',
  styleUrls: ['./contacto-add.component.css'],
  providers: [ContactoService]
})
export class ContactoEditComponent implements OnInit {

  public titulo:string;
  public _contact:Contacto;
  public _esEdit;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _contactoService: ContactoService
  ) { 

    this.titulo="Edit Contact";
    this._contact = new Contacto();
    this._esEdit=true;
  }

  ngOnInit() {
      this.getContact();
  }

  //Metodo para registrar un contacto
  public getContact(){   
     //obtengo el id del request
     this._route.params.forEach((params:Params)=>{
        let id = params['id'];     
        this._contactoService.getContactByID(id).subscribe(
          result =>{
              this._contact=result;
          },
          error => {
            console.log("error getContact :: " + <any>error);
          }
        );
    }); 
  }

  public saveContact(){
    this._contactoService.editContact(this._contact).subscribe(
      _resultado =>{            
               this._router.navigate(['/contact']);        
      },
      error =>{
        console.log("error editContact :: " + <any>error);
      }
    );     
  }
  
}
