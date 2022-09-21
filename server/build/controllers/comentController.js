"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comentController = void 0;
const database_curso_1 = __importDefault(require("../database_curso"));
class ComentController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const publis = yield database_curso_1.default.query('SELECT * FROM coment');
            res.json(publis);
        });
    }
    getcomentspubli(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_publi } = req.params;
            const coment = yield database_curso_1.default.query('SELECT * FROM coment WHERE id_publi =?', [id_publi]);
            if (coment.length > 0) {
                return res.json(coment);
            }
            res.status(404).json({ text: "Los comentarios no existen" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_curso_1.default.query('INSERT INTO coment set ?', [req.body]);
            res.json({ text: 'Comentario guardado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_curso_1.default.query('DELETE FROM coment WHERE id = ?', [id]);
            res.json({ message: 'Comentario eliminado correctamente' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_curso_1.default.query('UPDATE coment set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'Comentario actualizado correctamente' });
        });
    }
}
exports.comentController = new ComentController();
