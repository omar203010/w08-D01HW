import { Request,Response} from "express";
import { prisma } from "../config/db";
export const createMovie = async (req:Request,res:Response)=>{
    try{
        // const Movie =req.body;
    const add =  await prisma.movie.create({
            data:{
                name:req.body.name,
                genre:req.body.genre,
                rating:req.body.rating,
                duration:req.body.duration,
                

            }
        });
        res.json({message: "Movie created",
          });
        } catch (error) {
          res.send(error);
        }
      };

      export const getAllMovies = async (req: Request, res: Response) => {
        const users = await prisma.movie.findMany();
        res.json(users);
      };
      
      export async function updateMovie(req: Request, res: Response) {

        try{
        let movies = await prisma.movie.update({
    
            
            where:{
                
                name: req.params.name            
            },
            data:{
    
                name: req.body.name
            }
    
    
    
    
        });
    
        res.json({Request: "updated movie name from: " })}
    
        catch(e){res.json({msg: e})}
    
    
    }
    export async function deleteMovie(req: Request, res: Response) {

      try{
      let movie = await prisma.movie.delete({
  
          
          where:{
              
            name:req.params.name
           }
  
  
  
      });
  
      res.json({Request: "Deleted movie: " + req.params.name })}
  
      catch(e){res.json({msg: e})}
  
  
  }
    
  export async function getMoviesByrating(req: Request, res: Response) {

    try{
    let movies = await prisma.movie.findMany({

        
        where:{
            
            rating: Number(req.params.rating)
            
        }




    });

    res.json({Request: " movies with a rating  "+ req.params.rating, movies: movies})}
    catch(e){res.json({msg: e})}


}


export async function getMoviesBygenre(req: Request, res: Response) {

  try{
  const genre = req.params
  let movies = await prisma.movie.findMany({

  
      where:{
          
          genre: genre
          
      }




  });

  res.json({Request: "Fetched movies of genre: "+ req.params.genre , movies: movies})}
  catch(e){res.json({msg: e})}



}






