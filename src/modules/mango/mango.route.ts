import { Router } from "express";
import { createMango, deleteMango, getMango, getMangoById, updateMango } from "./mango.controller";


export const mangoRouter = Router()

mangoRouter.post("/create-mango", createMango)
mangoRouter.get("/get-mango", getMango)
mangoRouter.get("/get-mango/:id", getMangoById)
mangoRouter.delete("/delete-mango/:id", deleteMango)
mangoRouter.put("/update-mango/:id", updateMango)