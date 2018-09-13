import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/service.index';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  usuario:Usuario;
  imagenSubir: File;
  imagenTemp: any;


  constructor(
    public _usuarioService: UsuarioService
  ) {

    this.usuario=this._usuarioService.usuario;
   }

  ngOnInit() {
   
  }

  actualizarUsuario(form:NgForm){

    if(form.valid){
      
      let correo;
      if(!this.usuario.google)     
        correo=form.value.correo;
      else
        correo=this.usuario.email;

      let usuario = new Usuario(form.value.nombre,correo,this.usuario.password,this.usuario.img,
                 this.usuario.role,this.usuario.google,this.usuario._id);


      this._usuarioService.actualizarUsuario(usuario).subscribe();

    }
  }


  seleccionImage( archivo: File ) {

    if ( !archivo ) {
      this.imagenSubir = null;
      return;
    }

    if ( archivo.type.indexOf('image') < 0 ) {
      swal('Sólo imágenes', 'El archivo seleccionado no es una imagen', 'error');
      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivo;

    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL( archivo );

    reader.onloadend = () => this.imagenTemp = reader.result;
    
  }

  cambiarImagen() {
    this._usuarioService.cambiarImagen( this.imagenSubir, this.usuario._id );
  }

}
