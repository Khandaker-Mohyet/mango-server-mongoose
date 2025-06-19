import { Schema } from "mongoose";


const userSchema = new Schema<IUser>({
name:{type: String},
email:{type: String},
phone: {type: String},
password: {type: String},
role:{
    type: String,
    enum:["Admin", "Customer"]
}
})