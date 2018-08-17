import {Injectable} from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class PeticionesService{

    public URL:string;

    constructor(
        private _http:Http
    ){
        this.URL="https://jsonplaceholder.typicode.com/posts";
    }

    getPrueba(){
        return "Llamada desde el servicio.";
    }

    //invocamos al servicio que devuelve los posts
    getPosts(){
         return this._http.get(this.URL).pipe(
             map((res:Response) => res.json())
         );
    }


}