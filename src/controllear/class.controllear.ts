import { Request,Response} from "express";
import { prisma } from "../config/db";

export const createclass = async (req:Request, res:Response) => {

    try {

        const Classroom = req.body 

        await prisma.classroom.create({
            data:Classroom
        });

        res.json({ message: "class created successfully" });

    } catch(err) {

        res.json(err);
    }

}

export const Getallclass = async (req: Request, res: Response) => {
    const Addclass = await prisma.classroom.findMany();
    res.json(Addclass);
  };

  export async function getclasstByid(req: Request, res: Response) {
    let id = req.params
        try{
        let classroom = await prisma.classroom.findMany({
    
            
            where:id
               
      
        });
        res.json({ "":id})}
            catch(e){res.json({msg: e})}
        
        
        }
    