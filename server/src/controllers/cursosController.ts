import { Request, Response} from 'express';
import pool from '../database_curso'
class CursoController {
    public async list (req:Request, res:Response) {
        const cursos = await pool.query('SELECT * FROM curso');       
        res.json(cursos)
    }
    public async getOne(req:Request,res:Response): Promise<any>{
        const {codigo_curso} = req.params;
        const curso = await pool.query('SELECT * FROM curso WHERE codigo_curso =?',[codigo_curso])
        if(curso.length > 0){
            return res.json(curso[0]);
        }
        res.status(404).json({text: "El curso no existe"})
    }  
    public async create(req: Request, res : Response): Promise<void>{
        await pool.query('INSERT INTO curso set ?',[req.body]);
        res.json({text: 'Curso guardado'});
    }
    public async delete(req: Request, res : Response):Promise<void>{
        const {codigo_curso} = req.params
        await pool.query('DELETE FROM curso WHERE codigo_curso = ?',[codigo_curso])
        res.json({message: 'Curso eliminado correctamente'})
    }
    public async update(req:Request, res:Response): Promise<void>{
        const {codigo_curso} = req.params
        await pool.query('UPDATE curso set ? WHERE codigo_curso = ?',[req.body, codigo_curso])
        res.json({message: 'Curso actualizado correctamente'})
    }
}

export const cursoController = new CursoController();