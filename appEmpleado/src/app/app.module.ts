import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';

import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http'

import {routing,appRoutingProviders} from './app.routing';
import {ContactoComponent} from './contacto/contacto.component';
import {HomeComponent} from './home/home.component';

import {ConversorPipe} from './pipes/conversor.pipe';
import { CuentaComponent } from './cuenta/cuenta.component';
import { PlantillaComponent } from './plantilla/plantilla.component'

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    ContactoComponent,
    HomeComponent,
    ConversorPipe,
    CuentaComponent,
    PlantillaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
