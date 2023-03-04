import  Express  from "express";
import { Router } from "express";
import validate from "../middleware/vildate";
import {  createMovietype } from "../zode.schema/zod.Movie";
import {  createMovie,getAllMovies,updateMovie,deleteMovie,getMoviesByrating,getMoviesBygenre,  } from "../controllear/Movie.controllear";
const router = Router();


router.post("/", validate(createMovietype), createMovie)

router.get("/", getAllMovies )


router.put("/:name", updateMovie )

router.delete("/:name", deleteMovie )

router.get("/rating/:rating", getMoviesByrating )

router.get("/genre/:genre", getMoviesBygenre )





export default router;