import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from"dotenv"
import {userRoute} from "./routes/Api.js";
import { projectRoute } from "./routes/ProjectRoutes.js";
import { TaskRoutes } from "./routes/TaskRoutes.js";



dotenv.config({ path: '../.env' });
const app = express()
const PORT = process.env.PORT || 5000
//middleware
app.use(cors())
app.use(express.json())
// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("db is connected"))
  .catch(err => console.error("db connection error: ", err));
  

app.use(express.json())

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

app.use("/",userRoute)
app.use("/",projectRoute)
app.use("/",TaskRoutes)
