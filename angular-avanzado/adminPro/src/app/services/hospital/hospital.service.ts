import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';
import { URL_SERVICES } from '../../config/config';
import { map ,catchError} from 'rxjs/operators';
import { Hospital } from '../../models/hospital';
import { UsuarioService } from '../usuario/usuario.service';


import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  hospital:Hospital;
  token:string;

  constructor(
    public _router: Router,
    public _http: HttpClient,
    public _subirArchiveService: SubirArchivoService,
    public _usuarioService:UsuarioService
  ) {
    this.token=_usuarioService.token;
   }

  cargarHospitales(desde: number = 0){
    let URL= URL_SERVICES+'hospital?desde='+ desde;
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

  obtenerHospital(id:string){
    let URL= URL_SERVICES+'hospital/' + id;
    URL+='?token='+this.token;
    return this._http.get(URL).pipe(
      map((resp:any)=> {    
         console.log("resp " + resp.hospital);     
         return resp.hospital
      }
     ),
     catchError( (err) => {        
      return Observable.throw( err );
    }) 
    );
  }

  borrarHospital(id:String){
    let URL= URL_SERVICES+'hospital/' + id;
    URL+='?token='+this.token;
    return this._http.delete(URL).pipe(
      map(resultado=> {
           swal('Hospital borrado', 'El hospital a sido eliminado correctamente', 'success');
           return true;
      }),
      catchError( (err) => {        
        return Observable.throw( err );
      }) 
    );
  }

  crearHosiptal(nombre:string){
    let URL= URL_SERVICES+'hospital';
    URL+='?token='+this.token; 
    return this._http.post(URL,{ nombre }).pipe(
      map(resultado=> {         
           resultado;
      }),
      catchError( (err) => {        
        return Observable.throw( err );
      }) 
    );
  }

  buscarHospital(termino:string){
    let url = URL_SERVICES + 'busqueda/coleccion/hospital/' + termino;
    return this._http.get(url).pipe(
          map((resp: any) => resp.hospital ));
  }

  actualizarHospital(hospital:Hospital){
    let URL= URL_SERVICES+'hospital/' + hospital._id;
    URL+='?token='+this.token;

    return this._http.put( URL, hospital ).pipe(
      map( (resp: any) => {
        swal('Hospital actualizado', hospital.nombre, 'success' );
        return true;
      }),
      catchError( (err) => {        
        return Observable.throw( err );
      }) 
    );
  }

}
