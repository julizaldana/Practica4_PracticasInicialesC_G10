"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cursosController_1 = require("../controllers/cursosController");
class CursosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', cursosController_1.cursoController.list);
        this.router.get('/:id', cursosController_1.cursoController.getOne);
        this.router.post('/', cursosController_1.cursoController.create);
        this.router.delete('/:id', cursosController_1.cursoController.delete);
        this.router.put('/:id', cursosController_1.cursoController.update);
    }
}
const cursosRoutes = new CursosRoutes();
exports.default = cursosRoutes.router;
