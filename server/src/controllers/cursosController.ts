import { Request, Response} from 'express';
import pool from '../database_curso'
class CursoController {
    public list (req:Request, res:Response) {        
        res.json({text: 'Listando cursos'})
    }
    getOne(req:Request,res:Response){
        res.json({text: 'Este es el curso: ' + req.params.id})
    }  
    create(req: Request, res : Response){
        console.log(req.body)
        res.json({text: 'Creando un curso'});
    }
    delete(req: Request, res : Response){
        res.json({text: 'Eliminando un curso ' + req.params.id})
    }
    update(req:Request, res:Response){
        res.json({text: 'Actualizando un curso ' + req.params.id})
    }
}

export const cursoController = new CursoController();