function Perro(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}

Perro.prototype.ladrar = function(){
    return "GUAU"
}

let bobby = new Perro("Bobby", 12)


//combinación de un objeto y una función