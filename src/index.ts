import express, { Application } from "express"
import { envVariable } from "./Config/envVariable"
import { appConfig } from "./app"
import { dbConfig } from "./Config/DataBase"


const Port = envVariable.PORT
const app:Application = express()
appConfig(app)

const server = app.listen(Port,()=>{
    dbConfig()
    console.log("Server is listening on port :",Port)
})

process.on("uncaughtException",(error:any)=>{
console.log("A server is shutting down because of uncaughtException",error)
process.exit(1)
})


process.on("unhandledRejection",(reason:any)=>{
    console.log("A server is shutting down because of unhandledRejection",reason)
    server.close(()=>{
        process.exit(1)
    })
})