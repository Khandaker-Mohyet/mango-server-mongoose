import { Request, Response } from "express";
import Order from "./order.model";



export const createOrder = async(req:Request, res: Response) =>{

    // static method
    const order = await Order.create(req.body)

    // instance Method
    // const body = req.body;
    // const order = new Order(body)

    // const data = await order.save()

    res.send({
        success : true,
        message: "User created Successfully",
        data: order
    })
}

export const getOrder = async(req:Request, res: Response) =>{
    
    const data = await Order.find().populate("user").populate("mango")

    res.send({
        success : true,
        message: "User get Successfully",
        data
    })
}