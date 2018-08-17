import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent implements OnInit {
  public esAdministrador:boolean;

  constructor() { 
    this.esAdministrador=true;
  }

  ngOnInit() {
  }

  cambiar(valor){
    this.esAdministrador=valor;
  }
}
