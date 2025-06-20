import { Request, Response } from "express";
import Mango from "./mango.model";


export const createMango = async(req:Request, res: Response) =>{
    const body = req.body;
    const mango = new Mango(body)

    const data = await mango.save()

    res.send({
        success : true,
        message: "User created Successfully",
        data
    })
}


export const getMango = async(req:Request, res: Response) =>{
    

    const data = await Mango.find()

    res.send({
        success : true,
        message: "User created Successfully",
        data
    })
}