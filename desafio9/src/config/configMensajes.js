import mongoose from "mongoose";

export const mensajesConfigCollection = "mensajes";

const authorSchema = new mongoose.Schema({
  id: String,
  nombre: String,
  apellido: String,
  edad: String,
  alias: String,
  avatar: String,
});

export const mensajesSchema = new mongoose.Schema({
  author: authorSchema,
  text: String,
});