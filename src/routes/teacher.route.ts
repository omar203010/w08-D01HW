import  Express  from "express";
import { Router } from "express";
import validate from "../middleware/vildate";
import {  createteacher,Getallteachers,getteacherByid } from "../controllear/teacher.controllear";
import { teachervalid } from "../zode.schema/zod.teacher";

const router = Router();

router.post('/', validate(teachervalid), createteacher);
router.get('/', Getallteachers);
router.get('/:id',getteacherByid);












export default router;