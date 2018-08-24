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
export class ContactoAddComponent implements OnInit {

  public titulo:string;
  public _contact:Contacto;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _contactoService: ContactoService
  ) { 
    this.titulo="Create Contact";
    this._contact = new Contacto();
  }

  ngOnInit() {

  }

  //Metodo para registrar un contacto
  public saveContact(){   
      this._contactoService.saveContact(this._contact).subscribe(
        _resultado =>{            
                 this._router.navigate(['/contact']);        
        },
        error =>{
          console.log("error saveContact :: " + <any>error);
        }
      );      
  }
}
