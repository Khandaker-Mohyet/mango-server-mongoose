import { Request, Response } from "express";
import User from "./user.model";



export const createUser = async(req:Request, res: Response) =>{
    
    // instance method
    const body = req.body;
    const user = new User(body)

    const data = await user.save()

    res.send({
        success : true,
        message: "User created Successfully",
        data
    })
}

export const getUser = async(req:Request, res: Response) =>{
    
    const data = await User.find()

    res.send({
        success : true,
        message: "User get Successfully",
        data
    })
}