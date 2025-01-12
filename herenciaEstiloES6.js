//Referencia de ampliación:
//https://ui.dev/javascript-private-and-public-class-fields
// Clase Padre
class Padre {

    // Función constructora Padre
    constructor() {
      //this = {}
      this.atributoPadre = 'atributo padre';
      //return this;
    }
  
    // Método de Padre
    metodoPadre() {
        console.log('Esto es un método de Padre');
        console.log('atributoPadre' + this.atributoPadre);
    }
  
  }
  
  // Hijo que hereda (extends) de Padre
  class Hijo extends Padre {
  
    // Función constructora Hijo
    constructor() {
        //this = {}
        super();
        this.atributoHijo = 'atributo hijo';
        //return this;
    }
  
    // Metodo de Hijo
    metodoHijo() {
        console.log('Esto es un método Hijo');
        console.log('atributoPadre = ' + this.atributoPadre);
        console.log('atributoHijo = ' + this.atributoHijo);
    }
  
  }
  
// Instanciación de objeto hijo con prototipo Padre
let hijo = new Hijo();

console.log(hijo);
//hijo.prototype devuelve undefined, se accede mediante hijo.__proto__
// console.log(hijo.prototype);
//Para acceder al prototipo
console.log(hijo.__proto__);
console.log(Object.getPrototypeOf(hijo));
hijo.metodoPadre();
hijo.metodoHijo();


  