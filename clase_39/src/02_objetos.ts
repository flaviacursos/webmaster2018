/*
    Los objetos son representaciones de estrucutras de datos
    complejas que poseen caracteristicas (propiedades) y
    acciones (metodos) que funcionan como interface para 
    manipular e interactura con el objeto
*/


/*
    plantillas de texto
    usando ` (tilde invertido) para encerrar los strings
    podemos interpolar variables usando ${variable}
    o expresiones ${expresion}
*/

class Persona {
    // el metodo constructor es el encargado de
    // crear e inicializar la instancia
    constructor(public nombre:string, public apellido:string, public edad:number) {

    }

    // definimos un metodo (accion) public (se puede acceder desde afuera del objeto)
    // para mostrar los datos que tenga la instancia
    public mostrarDatos() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`)
    }
}

// clase Alumno es "hija" de la clase persona
// la extiende y hereda su funcionalidad
class Alumno extends Persona {

    constructor(public nombre:string, public apellido:string, public edad:number, public cursos:string[]) {
        // tenemos que llamar al constructor de la clase "padre"
        super(nombre, apellido, edad)
    }

    // re-definir un metodo de la clase padre
    public mostrarDatos() {
        // llamamos al metodo heredado
        super.mostrarDatos()
        if (this.cursos.length) {
            console.log(`Estoy en estos cursos:`)
            for (let i:number = 0; i < this.cursos.length; i++ ) {
                console.log(` - ${this.cursos[i]}`)
            }
        }
    }

}

// definir las variables
const yo:Persona = new Persona('Eric', 'Kersten', 35)
const vos:Persona = new Persona('Flavia', 'Ursino', 36)
const juan:Alumno = new Alumno(
    'Juan',
    'Gomez',
    25,
    [
        'Professional Webmaster',
        'Programador web avanzado'
    ]
)

// acceder a los metodos
yo.mostrarDatos()
vos.mostrarDatos()
juan.mostrarDatos()


// acceder a las variables
console.log(`${yo.nombre}`)
console.log(`${juan.nombre} está anotado en ${juan.cursos.length} cursos`)

// ejemplo de expresion con plantilla de texto
console.log(`6+4/2`)
console.log(`${6+4/2}`)
