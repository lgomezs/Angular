import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/service.index';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../models/Usuario';
import { Hospital } from '../../models/hospital';
import { Medico } from '../../models/Medico';
import { URL_SERVICES } from '../../config/config';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  usuarios:Usuario[] =[];
  hospitales:Hospital[]=[];
  medicos:Medico[]=[];


  constructor(
    public _router:Router,
    public _usuarioService:UsuarioService,
    public _http:HttpClient,
    public _activeRoute:ActivatedRoute
  ) { 

    this._activeRoute.params
        .subscribe(params=>{
            let termino= params['termino'];           
            this.cargarDatosBusqueda(termino);
        });
  }

  ngOnInit() {
    
  }

  cargarDatosBusqueda(termino:string){
   this.buscarDatos(termino).subscribe(datos=>{
      console.log(datos);
   });
  }

 buscarDatos(termino:string){
      let URL=URL_SERVICES+'busqueda/todo/' + termino;
      return this._http.get(URL).pipe(
        map((resultado:any)=>{          
            this.usuarios=resultado.usuarios;
            this.hospitales=resultado.hospitales;
            this.medicos= resultado.medicos;
        })
      );
 }

}
