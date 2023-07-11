import mongoose from "mongoose"
import { envVariable } from "./envVariable"

const URL = envVariable.DATABASE

export async function dbConfig(){
  try {
    const conn = await mongoose.connect(URL)
    console.log("connected:",conn.connection.host)

  } catch (error) {
    console.log(error)
  }
}