import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../config/config';

@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {
  transform(nombre: string, tipo: string = 'usuarios'): any {
    let URL = URL_SERVICES + 'imagenes/';

    if (!nombre) {
      return URL + '/usuarios/XXX';   
    }

    console.log("tipo " + tipo);
  
    if (nombre.indexOf('https') >= 0) {
      return nombre;
    } else {
      switch (tipo) {
        case 'usuarios':
          URL +=  'usuarios/' + nombre;
          break;

        case 'medicos':
          URL +=  'medicos/' + nombre;
          break;

        case 'hospital':
          URL +=  'hospitales/' + nombre;
          break;

        default:
          URL += 'usuarios/XXX';
          break;
      }

      console.log("URL peticion::  "+ URL);
      return URL;
    }
  }
}
