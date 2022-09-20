//! PASO 1: IMPORTAR FIREBASE DE LA DEPENDENCIA
var admin = require("firebase-admin");

//! PASO 2:; ESTABLECER LA CONFIGURACION: 

var serviceAccount = require("./db/fbcoderhouse32065-firebase-adminsdk-7qabf-1611ff1896.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fbcoderhouse32065.firebaseio.com" //Este link lo conseguis desde firebase mismo 
});

console.log("base de datos conectada");

//! HASTA ACA LA CONFIUGURACION

CRUD()

async function CRUD() {
    const db = admin.firestore(); //le decimos a la app que usamos la DB de firebase.

    const query = db.collection('usuarios'); //usamos la coleccion usuarios dentro de la DB. 



    //? CREATE:
   /* try {
        let id = 1;
        let doc = query.doc(`${id}`); //Le asignamos el id 1
        await doc.create({ nombre: "Facundo", dni: 41107741 }); //Creamos el documento nuevo 


        id++;
        doc = query.doc(`${id}`); //Le asignamos el id que se va sumando
        await doc.create({ nombre: "Pedro", dni: 42376543 }); //Creamos el documento nuevo 

        id++;
        doc = query.doc(`${id}`); //Le asignamos el id que se va sumando
        await doc.create({ nombre: "Felipe", dni: 45678912 }); //Creamos el documento nuevo 
    } catch (error) {
        console.log(error)
    }

*/
    //? READ:

    try {
        const querySnapshot = await query.get();
        let docs = querySnapshot.docs

        const response = docs.map((doc) => ({
            id: doc.id,
            nombre: doc.data().nombre,
            dni: doc.data().dni
        }));

        console.log(response)
    } catch (error) {
        console.log(error)
    }


    //? READ BY ID:

    try {
        let id = 2; //asignamos una variable id
        const doc = query.doc(`${id}`); //Obtenes el documento que pasas como id
        const item = await doc.get();
        const response = item.data();
        console.log(response);

    } catch (error) {
        console.log(error);
    }


    //? UPDATE:

    try {
        let id = 2;
        const doc = query.doc(`${id}`);
        let item = await doc.update({ dni: 12345678 }); //Pasamos por param el dato que queremos actualizar.
        //El metodo update busca directo en la data

        console.log(item);

    } catch (error) {
        console.log(error)
    };



    //? DELETE:

    try {
        let id = 3;
        const doc = query.doc(`${id}`);
        let item = doc.delete();

        console.log(item);
    } catch (error) {
        console.log(error)
    }
}