import { model, Schema } from "mongoose"
import { IMango } from "./mango.interface"

const mangoSchema = new Schema<IMango>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    variety: {
        type: String,
        required: true,
        trim: true
    },
    unit: {
        type: String,
        required: true,
        enum: ["KG", "TON"],
        default: "KG"
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    stock: {
        type: Number,
        min: 0
    },
    origin: {
        type: String
    },
    season: {
        type: String,
        enum: ["Summer", "Winter"]
    }
},
    {
        timestamps: true
    }
);

const Mango = model<IMango>("Mango", mangoSchema);

export default Mango