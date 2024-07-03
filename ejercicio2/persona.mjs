//exporta la clase persona que indica nombre y edad
export class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
//metodo de como mostrar la informacion
    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}