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


export const getMangoById = async(req:Request, res: Response) =>{
    const id = req.params.id

    const data = await Mango.findById(id)

    res.send({
        success : true,
        message: "User created Successfully",
        data
    })
}


export const deleteMango = async(req:Request, res: Response) =>{
    const id = req.params.id

    const data = await Mango.findByIdAndDelete(id,)

    res.send({
        success : true,
        message: "User update Successfully",
        data
    })
}


export const updateMango = async(req:Request, res: Response) =>{
    const id = req.params.id
    const body = req.body

    const data = await Mango.findByIdAndUpdate(id, body, {new:true, runValidators: true})

    res.send({
        success : true,
        message: "User update Successfully",
        data
    })
}