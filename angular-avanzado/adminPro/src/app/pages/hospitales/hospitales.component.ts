import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../models/hospital';
import { HospitalService } from '../../services/service.index';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

declare var swal: any;

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.css']
})
export class HospitalesComponent implements OnInit {

  hospitales:Hospital[]=[];
  desde: number = 0;
  totalRegistros: number = 0;
  cargando: boolean = true;

  constructor(
    public _hospitalService: HospitalService,
    public _modalUploadService: ModalUploadService
  ) { }

  ngOnInit() {
    this.cargarHospital();

    this._modalUploadService.notificacion
    .subscribe(
      res=> this.cargarHospital()
    );
  }

  cargarHospital(){
    this.cargando=true;
    this._hospitalService.cargarHospitales(this.desde)
       .subscribe((resul:any)=>{
          this.totalRegistros=resul.total;
          this.hospitales=resul.hospital;
          this.cargando=false;
       });
  }

  cambiarDesde( valor: number ) {

    let desde = this.desde + valor;

    if ( desde >= this.totalRegistros ) {
      return;
    }

    if ( desde < 0 ) {
      return;
    }

    this.desde += valor;
    this.cargarHospital();
  }

  buscarHospital(termino:string){

    if ( termino.length <= 0 ) {
      this.cargarHospital();
      return;
    }

    this.cargando = true;

    this._hospitalService.buscarHospital(termino)
        .subscribe((result:any)=>{
          this.hospitales=result.hospital;
          this.cargando=false;
        });
  }

  borarHospital(hospital:Hospital){

    swal({
      title: '¿Esta seguro?',
      text: 'Desea eliminar el hospital : ' + hospital.nombre,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then( borrar => {

      if (borrar) {
        this._hospitalService.borrarHospital( hospital._id )
                  .subscribe( borrado => {
                      this.cargarHospital();
                  });
      }

    });

  }

  actualizarHospital(hospital:Hospital){
    this._hospitalService.actualizarHospital(hospital)
      .subscribe();

  }

  mostrarModal( id: string ) {
    this._modalUploadService.mostrarModal( 'hospitales', id );
  }

  
}
