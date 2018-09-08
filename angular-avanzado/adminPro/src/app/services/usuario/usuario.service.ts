import { Injectable } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario:string;
  token:string;

  constructor(public _router:Router,private _http: HttpClient) {

   this.cargarStore();
   }

  cargarStore(){

    if ( localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse( localStorage.getItem('usuario') );
    } else {
      this.token = '';
      this.usuario = null;
    }
   }


  guardarStore(id:string,token:string,usuario:Usuario){
            localStorage.setItem('id',id);
            localStorage.setItem('token',token);
            localStorage.setItem('usuario',JSON.stringify(usuario));
            this.cargarStore();

  }
   
  crearUsuario(usuario:Usuario){
    let URL=URL_SERVICES + 'usuario';   
    return this._http.post(URL,usuario).pipe(     
        map((res:any) => {        
              res.usuario;  
          }                 
        )
      );
  }

  loginGoogle(token:string){
    let URL=URL_SERVICES + 'login/google';
    return this._http.post(URL,{token: token}).pipe(
      map((res:any) => {
          this.guardarStore(res.id,res.token,res.usuario)
          return true;
        }
      )
    );
  }

  logout() {
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this._router.navigate(['/login']);
  }


  login(usuario:Usuario,recuerdame:boolean){
    let URL=URL_SERVICES + 'login';

    if(recuerdame){
      localStorage.setItem('email',usuario.email);
    }else{
      localStorage.removeItem('email');
    }
    
    return this._http.post(URL,usuario).pipe(
      map((res:any) => {
            this.guardarStore(res.id,res.token,res.usuario);           
            return res;
          }
        )
    );    
  }


  public estaLogueado(){
    if(this.usuario!=null && this.token.length>5) return true;

    return false;
  }
}
