import { Routes, RouterModule, ROUTES} from '@angular/router'
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraficasComponent } from './pages/graficas/graficas.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import {ModuleWithProviders} from '@angular/core';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

const appRoutes:Routes = [   
    { path:'login', component: LoginComponent},   
    { path:'register', component: RegisterComponent},   
    { path:'**', component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes,{useHash: true});
