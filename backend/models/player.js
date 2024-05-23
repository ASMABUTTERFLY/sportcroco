//import mongoose Module
const mongoose = require("mongoose")

const playerSchema = mongoose.Schema({
name:String,    
position:String,
nbr : Number ,
age : Number,
teamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team"
}   
})


const player = mongoose.model("Player",playerSchema)


module.exports=player;