import express from "express"
import { login, signup } from "../controllers/userController.js"

export const routes = express.Router()

routes.post("/login", login)

routes.post("/signup", signup)
