import { Component, OnInit } from '@angular/core';
import { Medico } from '../../models/Medico';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';
import { MedicoService } from '../../services/service.index';
declare var swal: any;

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {
  
  medicos: Medico[] = [];
  desde: number = 0;
  totalRegistros: number = 0;
  cargando: boolean = true;


  constructor(
    public _modalUploadService: ModalUploadService,
    public _medicoServuce:MedicoService
  ) { }

  ngOnInit() {
    this.cargarMedicos();

    this._modalUploadService.notificacion
      .subscribe(
        res=> this.cargarMedicos()
      );
  }
  
  cargarMedicos(){
    this.cargando=true;
    this._medicoServuce.cargarMedicos()
      .subscribe((resul:any)=>{
        this.totalRegistros=resul.total;
        this.medicos=resul.medicos;
        this.cargando=false;
      });
  }

  buscarMedico(termino:string){

    if ( termino.length <= 0 ) {
      this.cargarMedicos();
      return;
    }

    this.cargando = true;
    this._medicoServuce.buscarMedico(termino)
      .subscribe((result:any)=>{
        this.medicos=result.medicos;
        this.cargando=false;
      });
  }

 
  mostrarModal(medico:Medico){
    this._modalUploadService.mostrarModal( 'medicos', medico._id );
  }

  actualizarMedico(medico:Medico){
    this._medicoServuce.actualizarMedico(medico)
      .subscribe();
  }

  borarMedico(medico:Medico){

    swal({
      title: '¿Esta seguro?',
      text: 'Desea eliminar el medico : ' + medico.nombre,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then( borrar => {

      if (borrar) {
        this._medicoServuce.borrarMedico( medico._id )
                  .subscribe( borrado => {
                      this.cargarMedicos();
                  });
      }

    });

  }

  cambiarDesde(valor: number){
    let desde = this.desde + valor;

    if ( desde >= this.totalRegistros ) {
      return;
    }

    if ( desde < 0 ) {
      return;
    }

    this.desde += valor;
    this.cargarMedicos();

  }
}
