import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/Usuario';
import { element } from 'protractor';
declare function initPlugin();
//api de google
declare const gapi:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email:string;
  public recuerdame:boolean;
  auth2:any; // The Sign-In object.
  googleUser:any; // The current user.

  constructor(public _router:Router,public _usuarioService:UsuarioService) {
    this.recuerdame=false;
   }

  ngOnInit() {
    initPlugin();
    this.googleInit();

    //para la opcion del recuerdame
    this.email= localStorage.getItem('email') || '';
    if(this.email.length>0){
      this.recuerdame=true;
    }
  }

  ingresar(form:NgForm){
    if(form.valid){
      
      let usuario = new Usuario(null,form.value.email,form.value.password,null,null,false,null);

      this._usuarioService.login(usuario,this.recuerdame).subscribe(
        respuesta=>{          
              this._router.navigate(['/dashboard']);
        },
        error=>{
            swal("ERROR", "Usuario o clave invalida!", "error");          
        }
      );
    }    
  }

 //se inicializa el plugin
  googleInit(){
    gapi.load('auth2', ()=>{
        this.auth2 = gapi.auth2.init({
          client_id: '982083734165-t6vii7178ga54tmsn7ubod3pfe35dc41.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          scope: 'profile email '
        });

        this.attachSign(document.getElementById('btnGoogle'));
    });
  }
  
  attachSign(element){
    this.auth2.attachClickHandler(element,{},(googleUser)=>{
          let profile= googleUser.getBasicProfile();
          //recuperamos el token de google
          let token= googleUser.getAuthResponse().id_token;
         
          this._usuarioService.loginGoogle(token).subscribe(
            reult=>{
                this._router.navigate(['/dashboard']);
            }
          );
    });
  }
  
}
