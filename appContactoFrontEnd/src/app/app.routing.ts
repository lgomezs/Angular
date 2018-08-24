import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule, ROUTES} from '@angular/router'

import { AppComponent } from './app.component';
import {ContactoComponent} from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ContactoAddComponent } from './contacto-add/contacto-add.component';


//array de objetos tipo Routes
const appRouter : Routes = [
    { path:'', component: AppComponent},  
    { path:'home', component: HomeComponent},   
    { path:'contact', component: ContactoComponent},   
    { path:'createContact', component: ContactoAddComponent},   
    { path:'**', component: ErrorComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRouter);