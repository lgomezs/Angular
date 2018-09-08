import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert'
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma:FormGroup;

  constructor(public _usuarioService:UsuarioService,public _router: Router) { }

  verificaPassword(campo1 : string, campo2:string){

    return (group: FormGroup) =>{

      let pass1=group.controls[campo1].value;
      let pass2=group.controls[campo2].value;

      if(pass1===pass2){
        return null;
      }
      return {
        sonIguales:true
      };
    };
  }

  ngOnInit() {

    this.forma= new FormGroup({
      nombre: new FormControl(null,Validators.required),
      correo: new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null,Validators.required),
      password2: new FormControl(null,Validators.required),
      condiciones: new FormControl(false)     
    },{validators: this.verificaPassword('password','password2')} );

  }

  registrarUsuario(){   

    if(!this.forma.valid){
      swal("Error", "Formulario no valido!", "error");
      return;
    }
    if(!this.forma.value.condiciones){
      swal("Importante", "Debe de aceptar las condiciones!", "warning");
      return;
    }

    let usuario = new Usuario(this.forma.value.nombre,this.forma.value.correo,this.forma.value.password,null,'USER_ROLE',false,null);

    this._usuarioService.crearUsuario(usuario).subscribe(
        result=>{         
            swal("OK", "Usuario registrado!", "success");
           // this._router.navigate(['/login']);
        },
        error=>{        
          swal("ERROR", "Error al registrar usuario!", "error");
        }
      );

  }
}
