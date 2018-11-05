import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../models/hospital';
import { Medico } from '../../models/Medico';
import { MedicoService, HospitalService } from '../../services/service.index';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

  hospitales: Hospital[] = [];
  medico: Medico = new Medico('', '', '', '', '');
  hospital: Hospital = new Hospital('');

  constructor(
    public _medicoService: MedicoService,
    public _hospitalService: HospitalService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public _modalUploadService: ModalUploadService
  ) {

    activatedRoute.params.subscribe( params => {
      let id = params['id'];
      if ( id !== 'nuevo' ) {
        this.cargarMedico( id );
      }
    });

   }

  ngOnInit() {
    this._hospitalService.cargarHospitales()
    .subscribe( hospitales => {
        console.log(hospitales);
        this.hospitales = hospitales.hospital
      });

    this._modalUploadService.notificacion
      .subscribe( resp => {
          this.medico.img = resp.medico.img;
     });

  }

  cargarMedico( id: string ) {
    this._medicoService.cargarMedico( id )
          .subscribe( medico => {   
            console.log("cargarMedico : " + medico)        
            this.medico = medico;
            this.medico.hospital = medico.hospital._id;
            this.cambioHospital( this.medico.hospital );
          });
  }

  cambioHospital( id: string ) {
    this._hospitalService.obtenerHospital( id )
          .subscribe( (resp:any) => {           
              this.hospital = resp 
            });
  }

  guardarMedico(f: NgForm ){
    if ( f.invalid ) {
      return;
    }  
    this._medicoService.guardarMedico(this.medico)
            .subscribe( data => {
              this.medico._id = data._id;
              this.router.navigate(['/medico', data._id ]);
     });
  }

  cambiarFoto() {
    this._modalUploadService.mostrarModal( 'medicos', this.medico._id );
  }
}
