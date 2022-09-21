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
exports.userController = void 0;
const database_curso_1 = __importDefault(require("../database_curso"));
class UserController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield database_curso_1.default.query('SELECT * FROM users');
            res.json(users);
        });
    }
    getcurca(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { carne } = req.params;
            const user = yield database_curso_1.default.query('SELECT * FROM users WHERE carne =?', [carne]);
            if (user.length > 0) {
                return res.json(user[0]);
            }
            res.status(404).json({ text: "El usuario no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_curso_1.default.query('INSERT INTO users set ?', [req.body]);
            res.json({ text: 'Usuario guardado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { carne } = req.params;
            yield database_curso_1.default.query('DELETE FROM users WHERE carne = ?', [carne]);
            res.json({ message: 'Usuario eliminado correctamente' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { carne } = req.params;
            yield database_curso_1.default.query('UPDATE users set ? WHERE carne = ?', [req.body, carne]);
            res.json({ message: 'Usuario actualizado correctamente' });
        });
    }
}
exports.userController = new UserController();
