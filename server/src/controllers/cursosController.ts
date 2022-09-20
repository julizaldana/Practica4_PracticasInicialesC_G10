import { Request, Response} from 'express';
import pool from '../database'
class CursoController {
    public async index (req:Request, res:Response) {
        pool.query('DESCRIBE curso')
        res.json('games')
    } 
}

export const cursoController = new CursoController();