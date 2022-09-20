import express from "express";

import ApiUsuariosMock from '../api/usuarios.js';

class UsuariosRouter extends express.Router{
    constructor() {
        super()

        const apiUsuarios = new ApiUsuariosMock(); //organizamos de mejor manera el proyecto
    }
}