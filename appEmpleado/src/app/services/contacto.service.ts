import {Injectable} from '@angular/core'

@Injectable()
export  class ContactoService{
    public nombreContacto:string;
    public collection_contacto=['Contacto 1', 'Contacto 2'];


    constructor(){
        this.nombreContacto ='call service -> GOMEZ SAAVEDRA';
    }

    prueba(){
        return this.nombreContacto;
    }

    
   addContacto(nombre_contacto):Array<String>{
     this.collection_contacto.push(nombre_contacto);     
     return this.getContacto();
   }

    getContacto(){
        return this.collection_contacto;
    }

    deleteContacto(index:number){
        this.collection_contacto.splice(index,1);
    }

}