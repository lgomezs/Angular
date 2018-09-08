import { Routes, RouterModule, ROUTES} from '@angular/router'
import {ModuleWithProviders} from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasComponent } from './graficas/graficas.component';
import { PagesComponent } from './pages.component';
import { AccoutSettingComponent } from './accout-setting/accout-setting.component';
import { PromesasComponent } from './promesas/promesas.component';
import { LoginGuard } from '../services/service.index';

const appRoutes:Routes = [
    { path:'', 
        component: PagesComponent,
        canActivate:[LoginGuard],
        children : [
            { path:'dashboard', component: DashboardComponent,data:{titulo: 'dashboard'}},  
            { path:'progress', component: ProgressComponent, data:{titulo: 'progress'}},   
            { path:'graficas', component: GraficasComponent,data:{titulo: 'grafica'}} ,
            { path:'accountSetting', component: AccoutSettingComponent,data:{titulo: 'Account Service'}}  ,
            { path:'promesas', component: PromesasComponent,data:{titulo: 'promesas'}} ,
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }            
        ]    
    }   
];

export const PAGE_ROUTES = RouterModule.forChild(appRoutes);
