import normalizr from "normalizr";
//! importamos la dependencia

const normalize = normalizr.normalize; 

const schema = normalizr.schema;




const blogpost = {
    id: "1",
    title: "My blog post",
    description: "Short blogpost description",
    content: "Hello world",
    author: {
      id: "1",
      name: "John Doe"
    },
    comments: [
      {
        id: "1",
        author: "Rob",
        content: "Nice post!"
      },
      {
        id: "2",
        author: "Jane",
        content: "I totally agree with you!"
      }
    ]
   }
   


//! Dfefinimos un esquema de usuarios (autores y comentarios)  Los esquemas son parte de la config.

const authorSchema = new schema.Entity('authors') //Esta es la manera que declaramos la entidad.

//!Definir esquema de comentarios
const commentSchema = new schema.Entity('comments');

//! Definimos un esquema de articulos

const postSchema = new schema.Entity('posts', { //Relacionamos los dos esquemas anteriores
    author: authorSchema,
    comments: [commentSchema] //Es un arreglo porque pueden haber mas de un comentario
});


import util from 'util'

function print(objeto) {
    console.log(util.inspect(objeto, false, 12, true ))
}
const normalizedData = normalize(blogpost, postSchema) //Recibe como 1er parametro el objeto que queremos normalizar y como segundo parametro la estructura o el esquema de la info que recibimos como resultado

print(normalizedData)