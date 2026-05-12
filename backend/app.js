import "dotenv/config"
import express from "express"
import { startDB } from "./config/database.js"
const app = express()
const port = 3000




startDB().then(
    app.listen(port, () => {
        console.log(`
            https://localhost:${port}
            `)
    })
)