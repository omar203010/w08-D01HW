import { prisma } from "../config/db";
import { Request,Response} from "express";
export const createteacher = async (req:Request, res:Response) => {

    try {

        const Teacher = req.body 

        await prisma.teacher.create({
            data:Teacher
        });

        res.json({ message: "teacher created successfully" });

    } catch(err) {

        res.json(err);
    }

}

export const Getallteachers = async (req: Request, res: Response) => {
    const getteacher = await prisma.teacher.findMany();
    res.json(getteacher);
  };

  export async function getteacherByid(req: Request, res: Response) {
    let id = req.params
        try{
        let teachers = await prisma.teacher.findMany({
    
            
            where:id
               
      
        });
        res.json({ "":id})}
            catch(e){res.json({msg: e})}
        
        
        }