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

import { ModalUploadService } from '../components/modal-upload/modal-upload.service';


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
    LoginGuard,
    ModalUploadService
  ],
  declarations: []
})
export class ServiceModule { }
