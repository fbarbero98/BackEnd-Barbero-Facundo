/* yo hice esto (mal)
const fs = require('fs');

fs.writeFileSync('./fyh.txt', ()=> {
    //! yo hice esto (return new Date)
})


try {
    const data = fs.readFileSync('./fyh.txt');
    clg(data)
} catch (error) {
    console.log(error);
    console.log('entro el catch')
}
*/


const fs = require('fs');
/*
const fecha = new Date().toLocaleDateString();
fs.writeFileSync('./fyh.txt', fecha)
-//? CON ESTO AFUERA DEL TRY FUNCIONA FUNCIONA-
*/
try {
    const fecha = new Date().toDateString();
    fs.writeFileSync('./fyh.txt', fecha)
} catch (error) {
   throw new Error ('Error 1')
};

try {
    const data = fs.readFileSync('./fyh.txt', 'utf8'); //MUY IMPORTANTE EL UTF 8 PARA QUE SE VEA, SINO SE VE EL BUFFER
    console.log(data)
} catch (error) {
    throw new Error ('Error 2'); //TThrow error lo que hace es mostrar el error en la aplicacion
}
