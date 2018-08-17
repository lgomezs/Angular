import { Component, OnInit } from '@angular/core';
import { Cuenta } from './cuenta';
import {PeticionesService} from '../services/peticiones.services'

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css'],
  providers:[PeticionesService]
})
export class CuentaComponent implements OnInit {

  public _cuenta:Cuenta;
  public cuentas:Array<Cuenta>;
  public articulos;

  constructor(
    private _peticionesService:PeticionesService
  ) { 
    this._cuenta = new Cuenta('',0.0,'','');
    this.cuentas = [
      new Cuenta('123-9829823',123.23,'soles','A')
    ];
  }

  ngOnInit() {
    console.log(this._peticionesService.getPrueba);
    //llamada al ws http get
    this._peticionesService.getPosts().subscribe(
        result=>{
           console.log("entre result : " + result);
           this.articulos=result;
        },
        error =>{
          var error = <any>error;
          console.log(error);
        }
    );

  }

  onSubmit(){
    console.log(this._cuenta);
    this.cuentas.push(this._cuenta);
    this._cuenta = new Cuenta('',0.0,'','');
  }
}
