import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors";
import {routes as castRoutes} from "./routes/cast.js"
import {routes as userRoutes} from "./routes/user.js"

const app = express()
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())
app.use("/api/user/", userRoutes)
app.use("/api/cast/", castRoutes)

mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(PORT, () => {
        console.log("🚀 Server is running on --> ", PORT)
    })
}).catch((error) => {
    console.log("Database error --> ", error)
})

// CREATE MODULE

// CREATE ROUTES

// CREATE CONTROLLERS
