//Referencias complementarias: https://ui.dev/beginners-guide-to-javascript-prototype
//https://ui.dev/javascript-inheritance-and-the-prototype-chain

// Función constructora Padre
function Padre() {
    //this = {};
    this.atributoPadre = 'atributo padre';
    //Ineficiente cada vez que se invoque la
    //función constructora crea un objeto function
    //nuevo que asigna
    // this.otraFuncionPadre = function() {
    //     console.log('otraFuncionPadre..');
    // }
    //return this;
}

// Método de Padre establecido por prototipo
Padre.prototype.metodoPadre = function() {
    console.log('Esto es un método de Padre');
    console.log('atributoPadre' + this.atributoPadre);
};

// Función constructora Hijo
function Hijo() {
    //this = {};
    //Se invoca la función constructora Padre, con el this de la función
    //constructora Hijo
    Padre.call(this);
    this.atributoHijo = 'atributo hijo';
    //return this;
}

// Implementando herencia de Padre por prototipo (Estilo ES5)
Hijo.prototype = Object.create(Padre.prototype);
Hijo.prototype.constructor = Hijo;

// Método de Hijo establecido por prototipo
Hijo.prototype.metodoHijo = function() {
    console.log('Esto es un método Hijo');
    console.log('atributoPadre = ' + this.atributoPadre);
    console.log('atributoHijo = ' + this.atributoHijo);
};

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