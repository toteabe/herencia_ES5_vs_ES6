
function prueba() {
    let a = {};
    a.fun = function() {

    }
    return a;   
}

let a1 = prueba();

let a2 = prueba();

console.log(a1.fun == a2.fun); //false