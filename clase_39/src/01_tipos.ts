var nombre:string = "Flavia"
var edad:number = 36
var casado:boolean = true

// array de strings
var hijos:string[] = ["Mirko", "Lucía"]

// forma alternativa de declarar arrays
var sobrinos:Array<string> = ["Alessia", "Stefano"]

// enum permite definir una lista de valores posibles
enum Color {Rojo, Verde, Azul}
var colorFavorito:Color = Color.Verde

// uso de tipos en funciones
// se define el tipo de los parametros (se puede pasar valor por defecto)
// se define el tipo de respuesta
function saludar(mostrarEdad:boolean=false):string {
    if (mostrarEdad) {
        return "Hola, soy " + nombre + " y tengo " + edad + " años"
    } else {
        return "Hola, soy " + nombre
    }
}

// saludo mostrando la edad
console.log(saludar(true))

// saludo sin mostrar la edad
console.log(saludar(false))

// saludo con el parametro por default (false)
console.log(saludar())