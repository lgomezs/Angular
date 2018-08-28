import { Routes, RouterModule, ROUTES} from '@angular/router'
import {ModuleWithProviders} from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasComponent } from './graficas/graficas.component';
import { PagesComponent } from './pages.component';

const appRoutes:Routes = [
    { path:'', 
        component: PagesComponent,
        children : [
            { path:'dashboard', component: DashboardComponent},  
            { path:'progress', component: ProgressComponent},   
            { path:'graficas', component: GraficasComponent},   
            { path:'' ,redirectTo:'/dashboard' ,pathMatch: 'full'}
        ]    
    }   
];

export const PAGE_ROUTES = RouterModule.forChild(appRoutes);
