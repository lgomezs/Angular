import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
    imports:[
        RouterModule,
        CommonModule,
        PipesModule
    ],
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent
    ],  
    exports:[
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent
    ]
  })
  export class SharedModule { }