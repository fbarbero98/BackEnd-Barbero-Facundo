export const options = { //Configuramos las opciones de configuracion y las exportamos
    client: 'mysql',
    connection:{
        host: '127.0.0.1',
        user:'root',
        password: '',
        database: 'ecommerce' 
    }
};

//No hay que hacer el module.export options porque ya hicimos el type:module en el packg.json

//! para el sqlLite

/*export const options = { //Configuramos las opciones de configuracion y las exportamos
    client: 'sqlite3',
    connection:{
        filename: './DB/mydb.sqlite'
    }
};*/