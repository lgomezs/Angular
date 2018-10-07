import { Component, OnInit } from '@angular/core';
import { SidebarService, UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/Usuario';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  public usuario:Usuario;

  constructor(public  _siteBarService: SidebarService,public _usuarioService:UsuarioService) { }

  ngOnInit() {
    this.usuario=this._usuarioService.usuario;
    this._siteBarService.cargarMenu();
    
  }



}
