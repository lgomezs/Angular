import { Routes, RouterModule, ROUTES} from '@angular/router'
import {ModuleWithProviders} from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasComponent } from './graficas/graficas.component';
import { PagesComponent } from './pages.component';
import { AccoutSettingComponent } from './accout-setting/accout-setting.component';
import { PromesasComponent } from './promesas/promesas.component';
import { LoginGuard } from '../services/service.index';
import { ProfileComponent } from './profile/profile.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

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
            { path:'perfil', component: ProfileComponent,data:{titulo: 'Perfil de usuario'}} ,
            { path:'busqueda/:termino', component: BusquedaComponent,data:{titulo: 'busqueda'}} ,
              // Mantenimientos
            { path: 'usuarios', component: UsuarioComponent, data: { titulo: 'Mantenimiento de Usuarios' } },
            { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Mantenimiento de Hospitales' } },
            { path: 'medicos', component: MedicosComponent, data: { titulo: 'Mantenimiento de Medicos' } },
            { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Actualizacion de Medico' } },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }            
        ]    
    }   
];

export const PAGE_ROUTES = RouterModule.forChild(appRoutes);
