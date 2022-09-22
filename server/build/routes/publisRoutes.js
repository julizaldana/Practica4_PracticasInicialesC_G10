"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const publisController_1 = require("../controllers/publisController");
class PublisRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', publisController_1.publisController.list);
        this.router.get('/:curso_catedratico', publisController_1.publisController.getcurca);
        this.router.post('/', publisController_1.publisController.create);
        this.router.delete('/:id', publisController_1.publisController.delete);
        this.router.put('/:id', publisController_1.publisController.update);
    }
}
const publisRoutes = new PublisRoutes();
exports.default = publisRoutes.router;
