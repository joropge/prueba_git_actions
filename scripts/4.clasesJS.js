function Animales (nombre, edad){
    let nuevoAnimal = Object.create(ConstructorAnimal);
    nuevoAnimal.nombre = nombre
    nuevoAnimal.edad = edad
    return nuevoAnimal
}

let ConstructorAnimal = {
    canta: function(){
        return `${this.nombre} puede ladrar`
    },
    baila: function(){
        return `${this.nombre} puede bailar`
    }
}

function Gato(nombre, edad, colorBIgotes){
    let nuevoGato = Animales(nombre, edad)
    Object.setPrototypeOf(nuevoGato, ConstructorGato)
    nuevoGato.colorBIgotes = colorBIgotes //
    return nuevoGato
}
let ConstructorGato = {
    bigotes(){
        return `Tengo bigotes color ${this.colorBIgotes}`
    }
}


class Animal{
    constructor(nombre,edad){
        this.nombre=nombre
        this.edad=edad
    }

    comer(){
        return "tengo fame"
    }
}