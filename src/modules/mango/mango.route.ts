import { Router } from "express";
import { createMango } from "./mango.controller";


export const mangoRouter = Router()

mangoRouter.post("/create-mango", createMango)