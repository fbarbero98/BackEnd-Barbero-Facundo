function dividir(dividendo, divisor) {
    return new Promise((resolve, reject) => { //La promesa siempre recive 2 parametros, resolve y reject
        if (divisor === 0) {
            reject('No se puede dividir por cero');
        }
        else {
            resolve(dividendo / divisor);
        }
    })
};

dividir(10, 2)
    .then(result => { //En el then o el catch se da el return
        console.log(`resultado = ${result}`)
    })
    .catch(error => {
        console.log(`error : ${error}`)
    })


    dividir(10, 0)
    .then(result => { //En el then o el catch se da el return
        console.log(`resultado = ${result}`)
    })
    .catch(error => {
        console.log(`error : ${error}`)
    })