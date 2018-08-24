import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  public titulo;

  constructor() { 
    this.titulo="Page Not Found";
    console.log("Pagina de error cargada...");
  }

  ngOnInit() {
  }

}
