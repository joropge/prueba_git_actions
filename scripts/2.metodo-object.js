function Perro(nombre, edad){
    let perro = Object.create(ObjetoConstructor)//estamos crendo con el nombre que queramos
    perro.nombre = nombre
    perro.edad = edad
    return perro
}

let ObjetoConstructor = {
    ladrar: function(){
        return "GUAUUU"
    }
}

let dani = Perro("Dani", 9)
console.log(dani)