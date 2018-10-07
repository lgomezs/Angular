import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';
import { URL_SERVICES } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { Medico } from '../../models/Medico';
import { map,catchError } from 'rxjs/operators';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
 
  constructor(
    public _router: Router,
    public _http: HttpClient,
    public _subirArchiveService: SubirArchivoService,
    public _usuarioService:UsuarioService
  ) { 

  }

  cargarMedicos(desde: number = 0){
    let URL= URL_SERVICES+'medico?desde='+ desde;
    return this._http.get(URL).pipe(
      map((resultado:any)=>{
              return resultado
          }
        ),
        catchError( (err) => {        
          return Observable.throw( err );
        }) 
    );
  }

  cargarMedico( id: string ) {
    let url = URL_SERVICES + 'medico/' + id;
    return this._http.get( url ).pipe(
              map( (resp: any) => resp.medico ));

  }


  obtenerMedico(id:String){
    let URL= URL_SERVICES+'medico/' + id;
    return this._http.get(URL).pipe(
      map(resultado=> {
           resultado;
      }),
      catchError( (err) => {        
        return Observable.throw( err );
      }) 
    );
  }

  borrarMedico(id:String){
    let URL= URL_SERVICES+'medico/' + id;
    URL+='?token='+this._usuarioService.token;
    return this._http.delete(URL).pipe(
      map(resultado=> {
           swal('Medico borrado', 'El medico a sido eliminado correctamente', 'success');
           return true;
      }),
      catchError( (err) => {        
        return Observable.throw( err );
      }) 
    );
  }

  crearMedico(nombre:string){
    let URL= URL_SERVICES+'medico';
    URL+='?token='+this._usuarioService.token;    
    return this._http.post(URL,{ nombre }).pipe(
      map(resultado=> {         
           resultado;
      }),
      catchError( (err) => {        
        return Observable.throw( err );
      }) 
    );
  }

  buscarMedico(termino:string){
    let url = URL_SERVICES + 'busqueda/coleccion/medico/' + termino;
    return this._http.get(url).pipe(
          map((resp: any) => resp.hospital ));
  }

  actualizarMedico(medico:Medico){
    let URL= URL_SERVICES+'medico/' + medico._id;
    URL+='?token='+this._usuarioService.token;

    return this._http.put( URL, medico ).pipe(
      map( (resp: any) => {
        swal('Medico actualizado', medico.nombre, 'success' );
        return true;
      }),
      catchError( (err) => {        
        return Observable.throw( err );
      }) 
    );
  }


  guardarMedico(medico:any) {
    let url = URL_SERVICES + 'medico';
   
    if ( medico._id ) {
      // actualizando
      url += '/' + medico._id;
      url += '?token=' + this._usuarioService.token;

      return this._http.put( url, medico ).pipe(
                map( (resp: any) => {
                  swal('Médico Actualizado', medico.nombre, 'success');
                  return resp.medico;
                }),
                catchError( (err) => {        
                  return Observable.throw( err );
                }) 
              );

    }else {
      // creando
      url += '?token=' + this._usuarioService.token;
      return this._http.post( url, medico ).pipe(
              map( (resp: any) => {
                swal('Médico Creado', medico.nombre, 'success');
                return resp.medico;
              }),
              catchError( (err) => {        
                return Observable.throw( err );
              }) 
            );
            
    }
  }
}
