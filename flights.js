const mongoose=require("mongoose");

const flightsSchema=new mongoose.Schema({
    id:{type:Number,required:true,unique:true},
    airline:{type:String,required:true},
    source:{type:String,required:true},
    destn:{type:String,required:true},
    fare:{type:Number,required:true},
    duration:{type:String,required:true}
})
const Flight=mongoose.model('Flight',flightsSchema)
export default Flight