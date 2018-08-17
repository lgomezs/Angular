import {Pipe,PipeTransform} from '@angular/core';

@Pipe({name : 'conversor' })
export class ConversorPipe implements PipeTransform{

    transform(value,por){
            let valor1= parseInt(value);
            let valor2 = parseInt(por);
            let resultado = "La multiplicacion de  " + valor1 + " por  " +  valor2 + "  = " + (valor1 * valor2) ;

            return resultado;
    }

}