
import express, { Application } from "express";
import { connectDB } from "./config/db";
import studentRoites from  "./routes/student.route"
import classroomRoites from "./routes/class.route";
import  TeacherRoites  from "./routes/teacher.route";
import * as dotenv from 'dotenv';
import { userInfo } from "os";
const app:Application = express();
dotenv.config();
const port = process.env.PORT || 3006;

connectDB();


app.use(express.json());

app.use("/student", studentRoites);

app.use("/Classroom", classroomRoites);

app.use("/Teacher", TeacherRoites);




const PORT = 3005;
app.listen(PORT, () => {console.log("server listening on port " + PORT);
});