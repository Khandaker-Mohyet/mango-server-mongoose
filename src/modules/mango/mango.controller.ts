import { Request, Response } from "express";
import Mango from "./mango.model";


export const createMango = async(req:Request, res: Response) =>{
    const body = req.body;
    const user = new Mango(body)

    const data = await user.save()

    res.send({
        success : true,
        message: "User created Successfully",
        data
    })
}