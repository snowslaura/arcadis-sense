import express, {json} from "express";
import cors from "cors";
import dotenv from "dotenv";
import "express-async-errors";
dotenv.config();
import errorHandlingMiddleware from "./middleware/errorHandlingMiddleware.js"
import router from "./routes/index.js"


const app = express()
app.use(cors());
app.use(json());
app.use(router)
app.use(errorHandlingMiddleware);

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})