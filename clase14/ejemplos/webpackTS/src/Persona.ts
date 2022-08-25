export default class Persona{ //creamos la clase persona
    private firstName: string;  //le asignamos ciertos valores
    private lastName: string;

    constructor(firstName:string, lastName:string){ //hacemos el constructor que recibe los valores por param
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string { //hacemos una funcion que nos devuleve los params sumados en un template string
        return `${this.firstName} ${this.lastName}`
    }
}