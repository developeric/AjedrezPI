import "dotenv/config"
import cors from "cors"
import express from "express"
import { startDB } from "./config/database.js"
const app = express()
const port = 3000

app.use(cors())


startDB().then(
    app.listen(port, () => {
        console.log(`
            https://localhost:${port}
            `)
    })
)