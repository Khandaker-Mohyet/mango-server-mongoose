import { Router } from "express";
import { createUser, getUser } from "./user.controller";


export const userRouter = Router()


userRouter.post("/create-user", createUser)
userRouter.get("/users", getUser)