import { Request, Response} from 'express';
import pool from '../database_curso'
class PublisController {
    public async list (req:Request, res:Response) {
        const publis = await pool.query('SELECT * FROM publis');       
        res.json(publis)
    }
    public async getcurca(req:Request,res:Response): Promise<any>{
        const {curso_catedratico} = req.params;
        const publi = await pool.query('SELECT * FROM publis WHERE curso_catedratico =?',[curso_catedratico])
        if(publi.length > 0){
            return res.json(publi);
        }
        res.status(404).json({text: "La publicacion no existe"})
    }  
    public async create(req: Request, res : Response): Promise<void>{
        await pool.query('INSERT INTO publis set ?',[req.body]);
        res.json({text: 'Publicacion guardada'});
    }
    public async delete(req: Request, res : Response):Promise<void>{
        const {id} = req.params
        await pool.query('DELETE FROM publis WHERE id = ?',[id])
        res.json({message: 'Publicacion eliminada correctamente'})
    }
    public async update(req:Request, res:Response): Promise<void>{
        const {id} = req.params
        await pool.query('UPDATE publis set ? WHERE id = ?',[req.body, id])
        res.json({message: 'Publicacion actualizada correctamente'})
    }
}

export const publisController = new PublisController();