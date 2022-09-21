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
exports.publisController = void 0;
const database_curso_1 = __importDefault(require("../database_curso"));
class PublisController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const publis = yield database_curso_1.default.query('SELECT * FROM publis');
            res.json(publis);
        });
    }
    getcurca(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { curso_catedratico } = req.params;
            const publi = yield database_curso_1.default.query('SELECT * FROM publis WHERE curso_catedratico =?', [curso_catedratico]);
            if (publi.length > 0) {
                return res.json(publi);
            }
            res.status(404).json({ text: "La publicacion no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_curso_1.default.query('INSERT INTO publis set ?', [req.body]);
            res.json({ text: 'Publicacion guardada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_curso_1.default.query('DELETE FROM publis WHERE id = ?', [id]);
            res.json({ message: 'Publicacion eliminada correctamente' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_curso_1.default.query('UPDATE publis set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'Publicacion actualizada correctamente' });
        });
    }
}
exports.publisController = new PublisController();
