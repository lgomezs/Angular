import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
    SettingService,
    SharedService,
    SidebarService
  } from './service.index';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SettingService,
    SharedService,
    SidebarService
  ],
  declarations: []
})
export class ServiceModule { }
