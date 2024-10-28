import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://rxm69040:9177651115@cluster0.z4lcy.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));
}