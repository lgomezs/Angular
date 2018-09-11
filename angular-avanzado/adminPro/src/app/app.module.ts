import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraficasComponent } from './pages/graficas/graficas.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { APP_ROUTES } from './app.route';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


//modules
import { PageModule } from './pages/page.module';
import { ServiceModule } from './services/service.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,        
    RegisterComponent        
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PageModule,
    FormsModule,
    ServiceModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
