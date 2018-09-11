import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any =[
    {
      titulo :  "Principal",
      icono : "mdi mdi-gauge",
      submenu : [
        {   titulo: "Dashboard",url: '/dashboard' },
        {   titulo: "ProgressBar",url: '/progress' },
        {   titulo: "Graficas",url: '/graficas' },
        {   titulo: "Promesas",url: '/promesas' }
      ]
    },
    {
      titulo: 'Mantenimientos',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        { titulo: 'Usuarios', url: '/usuarios' },
        { titulo: 'Hospitales', url: '/hospitales' },
        { titulo: 'Médicos', url: '/medicos' }
      ]
    }
  ];

  constructor() { }
}
