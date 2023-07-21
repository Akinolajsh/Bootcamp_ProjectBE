import express from "express"
import { mainApp } from "./mainApp";
import { connect } from "./db";

const port:number= 3334;
const app = express();

mainApp(app)
const server= app.listen(port,()=>{
    connect()
})

process.on("uncaughtException", (error: Error) => {
    console.log("Shutting down server because of uncaughtException Error");
    console.log(error);
  
    process.exit(1);
  });
  
  process.on("unhandledRejection", (reason: any) => {
    console.log("Shutting down server because of unhandledRejection Error");
    console.log(reason);
  
    server.close(() => {
      process.exit(1);
    });
  });