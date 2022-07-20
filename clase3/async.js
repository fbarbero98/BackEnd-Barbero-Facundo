function funA() {
    console.log(1)
    funB();
    console.log(2)  
}

function funB() {
    console.log(3)
    funC();
    console.log(4)
}
function funC() {
    console.log(5)
}

funA();

//Se ejecuta primero el 1, despues la funB osea el 2 y funC osea 5, despues el 4 de funB y al final funA




