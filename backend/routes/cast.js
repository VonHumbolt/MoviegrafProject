import express from "express"
import {addCast, getCasts} from "../controllers/castController.js"

export const routes = express.Router()

// create cast
routes.post("/", addCast)

routes.get("/", getCasts)
