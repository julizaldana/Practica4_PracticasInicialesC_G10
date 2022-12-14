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
exports.cursoController = void 0;
const database_curso_1 = __importDefault(require("../database_curso"));
class CursoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cursos = yield database_curso_1.default.query('SELECT * FROM curso');
            res.json(cursos);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo_curso } = req.params;
            const curso = yield database_curso_1.default.query('SELECT * FROM curso WHERE codigo_curso =?', [codigo_curso]);
            if (curso.length > 0) {
                return res.json(curso[0]);
            }
            res.status(404).json({ text: "El curso no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_curso_1.default.query('INSERT INTO curso set ?', [req.body]);
            res.json({ text: 'Curso guardado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo_curso } = req.params;
            yield database_curso_1.default.query('DELETE FROM curso WHERE codigo_curso = ?', [codigo_curso]);
            res.json({ message: 'Curso eliminado correctamente' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo_curso } = req.params;
            yield database_curso_1.default.query('UPDATE curso set ? WHERE codigo_curso = ?', [req.body, codigo_curso]);
            res.json({ message: 'Curso actualizado correctamente' });
        });
    }
}
exports.cursoController = new CursoController();
