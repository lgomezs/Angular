import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule, ROUTES} from '@angular/router'

//importar componentes
import {EmpleadoComponent} from './empleado/empleado.component';
import { AppComponent } from './app.component';

import {ContactoComponent} from './contacto/contacto.component';
import {HomeComponent} from './home/home.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { PlantillaComponent } from './plantilla/plantilla.component';

//array de objetos tipo Routes
const appRouter : Routes = [
    { path:'', component: HomeComponent},
    { path:'principal', component: HomeComponent},   
    { path:'empleado', component: EmpleadoComponent},     
    { path:'contacto', component: ContactoComponent},
    { path:'contacto/:id', component: ContactoComponent},
    { path:'cuenta', component: CuentaComponent},
    { path:'plantilla', component: PlantillaComponent},
    { path:'**', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRouter);