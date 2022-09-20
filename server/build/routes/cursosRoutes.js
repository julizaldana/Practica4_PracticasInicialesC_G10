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
        this.router.get('/', cursosController_1.cursoController.index);
    }
}
const cursosRoutes = new CursosRoutes();
exports.default = cursosRoutes.router;
