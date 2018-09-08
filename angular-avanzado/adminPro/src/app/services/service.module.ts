import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { 
    SettingService,
    SharedService,
    SidebarService,
    UsuarioService,
    LoginGuard
  } from './service.index';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingService,
    SharedService,
    SidebarService,
    UsuarioService,
    LoginGuard
  ],
  declarations: []
})
export class ServiceModule { }
