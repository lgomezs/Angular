export class Empleado{

    constructor(
        public nombre_empleado:string,
        public apellido_empleado:string,
        public dni:string,
        public contratado:boolean,
        public direcciones:Array<any>
    ){}

    /*
    public nombre_empleado;
    public apellido_empleado;
    public dni;

    constructor(nombre,apellido,dni){       
        this.nombre_empleado='LUIS MIGUEL ';
        this.apellido_empleado ='GOMEZ SAAVEDRA';
        this.dni ='42554161';    
    }*/

}