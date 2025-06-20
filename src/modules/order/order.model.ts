import { model, Schema } from "mongoose";
import { IOrder } from "./order.interface";
import Mango from "../mango/mango.model";


const orderAddressSchema = new Schema({
    zipcode: String,
    state: String,
    country: String,
    street: String,
})


const orderSchema = new Schema<IOrder>({
    user: {
        type: Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    mango: {
        type: Schema.Types.ObjectId,
        ref:"Mango",
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    },
    totalPrice:{
        type: Number,
        min: 0
    },
    address:
    {
        type: orderAddressSchema,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})


orderSchema.pre("save", async function(){
    console.log("doc form pre" + this);

    const mango = await Mango.findById(this.mango)
    if(!mango) throw new Error ("Mango not found")

        this.totalPrice= mango.price * this.quantity
})


orderSchema.post("save", function(doc, next){
    console.log("doc form post" + doc)
    next()
})

const Order = model("Order", orderSchema)

export default Order;