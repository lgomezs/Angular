import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(public _router:Router,
    public _usuarioService:UsuarioService  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot    
  ): Observable<boolean> | Promise<boolean> | boolean {

    if(this._usuarioService.estaLogueado()){
        return true;
    }else{
      this._router.navigate(['/login']);
      return false;
    }
  }
}
