//import mongoose Module
const mongoose = require("mongoose")

const teamSchema = mongoose.Schema({
    name: String,
    fondation: Number,
    owner: String,
    playersId:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player"
    }]

})


const team = mongoose.model("Team", teamSchema)


module.exports = team;