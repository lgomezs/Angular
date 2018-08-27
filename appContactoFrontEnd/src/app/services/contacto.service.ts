import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {Global}  from '../util/Global';
import { Contacto } from '../contacto/contacto';

@Injectable()
export class ContactoService {

  public ENDPOINT_CONTACT:string;

  constructor(
    public _http:Http
  ) { 
     //endpoint de nuestro servicio Contact
     this.ENDPOINT_CONTACT=Global.ENDPOINT_CONTACT;
  }

  public getContact(){       
    return this._http.get(this.ENDPOINT_CONTACT+'listContacto').pipe(
           map((res:Response) => res.json())
     );
  }

  public getContactByID(id:string){
    return this._http.get(this.ENDPOINT_CONTACT+'getContacto' +'/'+id).pipe(
      map((res:Response) => res.json())
    );
  }

  public saveContact(contact:Contacto){
    return this._http.post(this.ENDPOINT_CONTACT+'saveContacto',contact).pipe(
      map((res:Response)=> res.json)
    );
  }


  public deleteContact(id:String){
    return this._http.delete(this.ENDPOINT_CONTACT+'deleteContacto' + "/"+  id).pipe(
        map((res:Response)=> res.json)
    );
  }

  public editContact(contacto:Contacto){
    return this._http.post(this.ENDPOINT_CONTACT+'updateContactoByID',contacto).pipe(
      map((res:Response)=> res.json)
    );
  }
}
