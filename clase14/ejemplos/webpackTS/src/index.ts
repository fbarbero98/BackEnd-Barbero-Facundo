
import express from "express"; //Es una app de express
import { getTime } from "../lib/utils"; //Hacemos otro import y trabajamos con otros archivos
import Persona from "./Persona";

const p: Persona = new Persona("Coder", "House"); //declaramos una const que sea un constructor con los valores que pasamos

const app = express(); //No se declara el tipo de dato xq ts lo hace automatico. 

app.get("/", (req, res) => {
 res.send({
   time: getTime(),
   name: p.getFullName(),
 });
});

const PORT : number = 8080; //Aclaramos el tipo de dato
app.listen(PORT, () => {
 console.log(`conectado al puerto: ${PORT}`);
});
