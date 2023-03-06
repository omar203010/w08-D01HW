import  Express  from "express";
import { Router } from "express";
import validate from "../middleware/vildate";
import { createclass,Getallclass, getclasstByid } from "../controllear/class.controllear";
import { classvalid } from "../zode.schema/zod.class";
const router = Router();



// create
router.post('/',validate(classvalid), createclass);
router.get('/', Getallclass);
router.get('/:id', getclasstByid);









export default router;