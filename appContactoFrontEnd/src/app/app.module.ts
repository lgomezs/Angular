import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { appRoutingProviders, routing } from './app.routing';

import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ContactoAddComponent } from './contacto-add/contacto-add.component'
import {DataTableModule} from "angular-6-datatable";
import { ContactoDetailComponent } from './contacto-detail/contacto-detail.component';
import { ContactoEditComponent } from './contacto-add/contacto-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,    
    HomeComponent, 
    ErrorComponent, 
    ContactoAddComponent, 
    ContactoDetailComponent  ,
    ContactoEditComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    DataTableModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
