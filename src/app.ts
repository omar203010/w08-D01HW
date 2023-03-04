
import express, { Application } from "express";
import { connectDB } from "./config/db";
import MovieRoites from  "./routes/Movie.routes"
import * as dotenv from 'dotenv';
import { userInfo } from "os";
// import usersRoutes from "./routes/users.Routes";
const app:Application = express();
dotenv.config();
const port = process.env.PORT || 3003;

connectDB();
app.use(express.json());

app.use("/Movie", MovieRoites);
// app.use("/users",usersRoutes )



const PORT = 3008;
app.listen(PORT, () => {
  console.log("server listening on port " + PORT);
});