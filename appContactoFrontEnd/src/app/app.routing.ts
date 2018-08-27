import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule, ROUTES} from '@angular/router'

import { AppComponent } from './app.component';
import {ContactoComponent} from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ContactoAddComponent } from './contacto-add/contacto-add.component';
import { ContactoDetailComponent } from './contacto-detail/contacto-detail.component';
import { ContactoEditComponent } from './contacto-add/contacto-edit.component';



//array de objetos tipo Routes
const appRouter : Routes = [
    { path:'', component: HomeComponent},  
    { path:'home', component: HomeComponent},   
    { path:'contact', component: ContactoComponent},   
    { path:'createContact', component: ContactoAddComponent},   
    { path:'verContact/:id', component: ContactoDetailComponent}, 
    { path:'editContact/:id', component: ContactoEditComponent},        
    { path:'**', component: ErrorComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRouter);