import { Request, Response} from 'express';
import pool from '../database_curso'
class UserController {
    public async list (req:Request, res:Response) {
        const users = await pool.query('SELECT * FROM users');       
        res.json(users)
    }
    public async getcurca(req:Request,res:Response): Promise<any>{
        const {carne} = req.params;
        const user = await pool.query('SELECT * FROM users WHERE carne =?',[carne])
        if(user.length > 0){
            return res.json(user[0]);
        }
        res.status(404).json({text: "El usuario no existe"})
    }  
    public async create(req: Request, res : Response): Promise<void>{
        await pool.query('INSERT INTO users set ?',[req.body]);
        res.json({text: 'Usuario guardado'});
    }
    public async delete(req: Request, res : Response):Promise<void>{
        const {carne} = req.params
        await pool.query('DELETE FROM users WHERE carne = ?',[carne])
        res.json({message: 'Usuario eliminado correctamente'})
    }
    public async update(req:Request, res:Response): Promise<void>{
        const {carne} = req.params
        await pool.query('UPDATE users set ? WHERE carne = ?',[req.body, carne])
        res.json({message: 'Usuario actualizado correctamente'})
    }
}

export const userController = new UserController();