import  Express  from "express";
import { Router } from "express";
import validate from "../middleware/vildate";
// import {  createMovietype } from "../zode.schema/zod.Movie";
import {  Getallstudents, createstudent,getstudentByid} from "../controllear/student.controllear";
import { studentvalid } from "../zode.schema/zod.student";
const router = Router();


router.post("/",validate(studentvalid), createstudent)
router.get("/", Getallstudents )
router.get("/student/:id", getstudentByid )







export default router;