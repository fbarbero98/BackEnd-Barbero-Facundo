class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = libros;
      this.mascotas = mascotas; 
    }
  
    getFullName(){
      return `${this.nombre} ${this.apellido}` // this.nombre + " " + this.apellido
    }
    addMascota(pet){
      this.mascotas.push(pet)
    }
    countMascotas(){
      return this.mascotas.length
    }
    addBook(nombre, autor){
      this.libros.push({nombre , autor})  
    }
    getBookNames(){
  let booknames = [];
      this.libros.map(libro =>             booknames.push(libro.nombre));  
      return booknames;
    }  
  }
  
  const p = new Usuario('Juan', 'Perez', [{nombre:"Harry Potter", autor: "J.K. Rowling"}], ["perro" , "gato", "pez"] )
  
  console.log(p)
  console.log(p.getFullName())
  console.log(p.addMascota("gato2"))
  console.log(p.mascotas)
  console.log(p.countMascotas())
  p.addBook("LOTR", "JRR Tolkien")
  console.log(p.getBookNames())

let capo = 0
  