import { Request, Response} from 'express';
import pool from '../database_curso'
class ComentController {
    public async list (req:Request, res:Response) {
        const publis = await pool.query('SELECT * FROM coment');       
        res.json(publis)
    }
    public async getcomentspubli(req:Request,res:Response): Promise<any>{
        const {id_publi} = req.params;
        const coment = await pool.query('SELECT * FROM coment WHERE id_publi =?',[id_publi])
        if(coment.length > 0){
            return res.json(coment);
        }
        res.status(404).json({text: "Los comentarios no existen"})
    }  
    public async create(req: Request, res : Response): Promise<void>{
        await pool.query('INSERT INTO coment set ?',[req.body]);
        res.json({text: 'Comentario guardado'});
    }
    public async delete(req: Request, res : Response):Promise<void>{
        const {id} = req.params
        await pool.query('DELETE FROM coment WHERE id = ?',[id])
        res.json({message: 'Comentario eliminado correctamente'})
    }
    public async update(req:Request, res:Response): Promise<void>{
        const {id} = req.params
        await pool.query('UPDATE coment set ? WHERE id = ?',[req.body, id])
        res.json({message: 'Comentario actualizado correctamente'})
    }
}

export const comentController = new ComentController();