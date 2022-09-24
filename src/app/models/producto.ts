//Reemplaza al public cclass (Java u otros)
export class Producto{

        _id?: number;
        nombre : string;
        categoria: string;
        precio : number;
        
        constructor(nombre: string, categoria: string, precio: number){
            this.nombre = nombre;
            this.categoria = categoria;
            this.precio = precio;
        }

}