import express, {json} from "express";
import cors from "cors";
import  errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js"

const app = express()
app.use(cors());
app.use(json());
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})