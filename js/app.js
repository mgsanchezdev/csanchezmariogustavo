class Usuario{
    constructor(nombre, apellido, libros = [], mascotas = []){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros= libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(mascota){
        this.mascotas.push(mascota);
    }

    getMascotas (){
        return this.mascotas;
    }

    addBook (book, autor) {
        const libro = {
            nombre: book,
            autor: autor,
          };
          this.libros.push(libro);
    }

    getLibros(){
        return this.libros.map((libro)=>libro.nombre);
    }
}


let juan  = new Usuario("juan",
"Perez",
[{ nombre: "Lengua", autor: "Fernandez" }],
["Nina", "Moncho", "Hermano", "Perico"])
juan.getFullName();
juan.addMascota("Firulay");
juan.getMascotas();
juan.addBook("Programación", "Roman");
juan.getBook();