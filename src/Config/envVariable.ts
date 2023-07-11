import dotenv from "dotenv"

dotenv.config()
export const envVariable = {
    PORT: process.env.PORT!,
    DATABASE:process.env.DATABASE!
} 