import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasComponent } from './graficas/graficas.component';
import { PagesComponent } from './pages.component';
import { PAGE_ROUTES } from './pages.routes';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccoutSettingComponent } from './accout-setting/accout-setting.component';
import { PromesasComponent } from './promesas/promesas.component';


//modulos
import { PipesModule } from '../pipes/pipes.module';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { CommonModule } from '@angular/common';
import { MedicoComponent } from './medicos/medico/medico.component';



@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        GraficasComponent,
        PagesComponent,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccoutSettingComponent,
        PromesasComponent,
        ProfileComponent,
        UsuarioComponent,
        HospitalesComponent,
        MedicosComponent,
        ModalUploadComponent,
        MedicoComponent
               
    ],  
    exports:[
        DashboardComponent,
        ProgressComponent,
        GraficasComponent,
        PagesComponent,
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    imports: [
        SharedModule,
        PAGE_ROUTES,
        FormsModule,
        ChartsModule,
        PipesModule,
        CommonModule
    ]  
  })
  export class PageModule { }