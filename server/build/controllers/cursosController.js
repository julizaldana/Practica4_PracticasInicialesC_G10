"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cursoController = void 0;
class CursoController {
    list(req, res) {
        res.json({ text: 'Listando cursos' });
    }
    getOne(req, res) {
        res.json({ text: 'Este es el curso: ' + req.params.id });
    }
    create(req, res) {
        console.log(req.body);
        res.json({ text: 'Creando un curso' });
    }
    delete(req, res) {
        res.json({ text: 'Eliminando un curso ' + req.params.id });
    }
    update(req, res) {
        res.json({ text: 'Actualizando un curso ' + req.params.id });
    }
}
exports.cursoController = new CursoController();
