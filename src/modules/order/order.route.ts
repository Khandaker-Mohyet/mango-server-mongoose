import { Router } from "express";
import { createOrder, getOrder } from "./order.controller";



export const orderRouter = Router()

orderRouter.post("/order", createOrder)
orderRouter.get("/order", getOrder)