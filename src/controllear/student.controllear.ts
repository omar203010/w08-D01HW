import { Request,Response} from "express";
import { prisma } from "../config/db";



export const Getallstudents = async (req: Request, res: Response) => {
  const Studens = await prisma.student.findMany();
  res.json(Studens);
};



export const createstudent = async (req:Request,res:Response)=>{
    try{
      let student =req.body
      const Newstudent =  await prisma.student.create({

            data:student
        });
        res.json({ "student created":student,
          });
        } catch (error) {
          res.send(error);
        }
      };
  export async function getstudentByid(req: Request, res: Response) {
let id = req.params
    try{
    let student = await prisma.student.findMany({

        
        where:id
           
  
    });
    res.json({ "":id})}
        catch(e){res.json({msg: e})}
    
    
    }







      
//       export async function updateMovie(req: Request, res: Response) {
// let movies = req.body 
//         try{
//         let update_moviess = await prisma.movie.update({
    
            
//             where:{
                
//                 name: req.params.name            
//             },
//             data:movies
    
    
    
    
//         });
    
//         res.json({"msg": "updated movie name from: "+  update_moviess})}
    
//         catch(e){res.json({msg: e})}
    
    
//     }
//     export async function deleteMovie(req: Request, res: Response) {

//       try{
//       let movie = await prisma.movie.delete({
  
          
//           where:{
              
//             name:req.params.name
//            }
  
  
  
//       });
  
//       res.json({"Deleted movie: ": movie})}
  
//       catch(e){res.json({msg: e})}
  
  
//   }
    
//   export async function getuserByemail(req: Request, res: Response) {
// let email = req.body
//     try{
//     let user = await prisma.user.findMany({

        
//         where:email
           
    




//     });

//     res.json({ "   ":email})}
//     catch(e){res.json({msg: e})}


// }


// export async function getMoviesBygenre(req: Request, res: Response) {

//   try{
//   const genre = req.params
//   let movies = await prisma.movie.findMany({

  
//       where:genre
          




//   });

//   res.json({ "Fetched movies of genre: " :movies})}
//   catch(e){res.json({msg: e})}



// }






