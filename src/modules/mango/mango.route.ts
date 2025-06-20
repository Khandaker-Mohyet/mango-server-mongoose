import { Router } from "express";
import { createMango, getMango } from "./mango.controller";


export const mangoRouter = Router()

mangoRouter.post("/create-mango", createMango)
mangoRouter.get("/get-mango", getMango)