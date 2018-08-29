import { Component, OnInit, Input, Output ,EventEmitter,ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress:ElementRef;
  //entradas
  @Input() leyenda:string = "Leyenda";
  @Input() public progreso:number=50;
  //salida
  @Output() cambioValor:EventEmitter<number> = new EventEmitter();

  constructor() { 
   
  }

  ngOnInit() {
    
  }

  onchages(newValue:number){
    //let elementHTML:any = document.getElementsByName('progreso')[0];
   
    if(newValue>=100)
      this.progreso=100;
    else if (newValue<=0)
     this.progreso=0;
    else
      this.progreso=  newValue;

    //elementHTML.value=this.progreso;
    this.txtProgress.nativeElement.value=this.progreso;
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }

  cambiarValor(valor){
    if(this.progreso<=0 && this.progreso<0){
      this.progreso=0;
      return;
    }

    if(this.progreso>=100 && this.progreso>0){
      this.progreso=100;
      return;
    }
    this.progreso=this.progreso+valor;
    this.cambioValor.emit(this.progreso);
  }  
}
