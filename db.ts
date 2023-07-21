import mongoose from "mongoose"

const mongoUrl: string= "mongodb://0.0.0.0:27017/SkillsDB"

export const connect=()=>{
    try {
        mongoose.connect(mongoUrl).then(()=>{
            console.log("Connected 🚀🚀🚀");
        })
    } catch (error) {
        console.log(error)
    }
}