import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  public title:String;
  public empleado:Empleado;
  public direcciones:Array<any>;
  public empleadores:Array<Empleado>;
  public trabajadorExterno:boolean;
  public color:string;
  public color_seleccionado:string;

  constructor() {
     this.title ='Componente empleado';  
     this.direcciones = ['JIRON NAPO','CALLE LIMA'];
     this.empleado = new Empleado('LUIS MIGUEL ','GOMEZ SAAVEDRA','42554161',true,this.direcciones);
     

     this.empleadores  =[
       new Empleado('empleado 1 ','TES 1 ','42554161',false,this.direcciones),
       new Empleado('empleado 2','TES 2 ','42554161',false,this.direcciones),
       new Empleado('empleado 3','TEST 3 ','42554161',true,this.direcciones)
     ];

     this.trabajadorExterno =false;
     this.color='blue';
     this.color_seleccionado='#ccc';
   }


  ngOnInit() {
    console.log(this.empleadores);
  }

  public cambiarEmpleadoExterno(valor){   
    this.trabajadorExterno =valor;
    console.log(this.trabajadorExterno );
  }

}
