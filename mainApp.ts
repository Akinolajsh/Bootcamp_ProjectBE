import express,{Application, Request, Response} from "express"
import cors from "cors"

export const mainApp= (app:Application)=>{
app.use(cors())
.use(express.json())
}
