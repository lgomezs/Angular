import { Injectable } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(public _router:Router,private _http: HttpClient,public _subirArchivoService: SubirArchivoService) {

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
            this.usuario = usuario;
            this.token = token;

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

  actualizarUsuario(usuario:Usuario){
    let url = URL_SERVICES + 'usuario/' + usuario._id;
    url += '?token=' + this.token;
 
    return this._http.put( url, usuario).pipe(
                map( (resp: any) => {

                  if ( usuario._id === this.usuario._id ) {
                    let usuarioDB: Usuario = resp.usuario;
                    this.guardarStore( usuarioDB._id, this.token, usuarioDB );
                  }

                  swal('Usuario actualizado', usuario.nombre, 'success' );

                  return true;
                })
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


  cambiarImagen( archivo: File, id: string ) {

    this._subirArchivoService.subirArchivo( archivo, 'usuarios', id )
          .then( (resp: any) => {

            this.usuario.img = resp.usuario.img;
            swal( 'Imagen Actualizada', this.usuario.nombre, 'success' );
            this.guardarStore( id, this.token, this.usuario );

          })
          .catch( resp => {
            console.log( resp );
          }) ;

  }

  cargarUsuarios( desde: number = 0 ) {
    let url = URL_SERVICES + 'usuario?desde=' + desde;
    return this._http.get( url );
  }

  buscarUsuarios( termino: string ) {
    let url = URL_SERVICES + 'busqueda/coleccion/usuarios/' + termino;
    return this._http.get(url).pipe(
          map((resp: any) => resp.usuarios ));
  }

  borrarUsuario( id: string ) {
    let url = URL_SERVICES + 'usuario/' + id;
    url += '?token=' + this.token;

    return this._http.delete(url).pipe(
      map( resp => {
        swal('Usuario borrado', 'El usuario a sido eliminado correctamente', 'success');
        return true;
      })
    );              

  }

}
