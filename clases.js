class Persona {
     constructor(nombre, apellido, edad, mascotas, libros){
          this.nombre = nombre;
          this.apellido = apellido;
          this.edad = edad;
          this.mascotas = mascotas;
       		this.libros = libros;
     }
  
  //---1----Function getFullName(): String
	// Retorna el nombre completo del usuario, utulizar template strings.
	getFullName(){
    console.log(`${this.nombre} ${this.apellido}`)
	}
  	
  //---2----Function adMascota(String): void
	// Recibe un nombre de Mascota y lo agrega al Array de Mascotas.
	addPet(nombre){
		const newPet = nombre;
  	console.log(`Mascota agregada ${newPet}`);
 		this.mascotas.push(newPet);
		}
  
  //---3----Function CountMascotas(): Number.
	// Retorna la cantidad de mascotas y lo agrega al Array de Mascotas.
  petCount(){
    console.log(`${this.mascotas.length}`)
  }
  
  //---4----Function addBook(String, String): void
	// REcibe un string 'nombre' y un string 'autor' y debe agregar un objeto: 		{nombre: String, autor: String} ak arrat de Libros
  addBook(titulo, autor){
    const newBook = {titulo: titulo, autor: autor};
    console.log(`Libro agregado ${newBook.titulo} de ${newBook.autor}`)
    this.libros.push(newBook);
  }
  
  //---5----Function getBookNames(): String[]
	// Retorna un Array con solo los nombres del Array de libros del 		   	 Usuario.
  getBookNames(){
    console.log(`${this.libros}`)
    console.log(this.libros)
  }
  
}

const p = new Persona ("Lucas", "Fernandez", 28, ["Cuco"], [{titulo: "The Witcher", autor:"Andrzej Sapkowski"}]) 

//Nombre completo del Usuario.
p.getFullName()

//Agrega una mascota o mas.
p.addPet('Klei')
p.addPet('Negruto') 
p.addPet('Lilith') 
//Revisamos la cantidad de mascotas.
console.log(p.mascotas)
p.petCount()

//Agreamos uno con addBook.
p.addBook("The Lord of the Rings", "J. R. R. Tolkien")
console.log(p.libros)

p.getBookNames()