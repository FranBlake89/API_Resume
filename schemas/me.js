const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meSchema = new Schema ({
    name :{ 
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    github:{
        type: String,
        required: true
    },
    jobPosition: { 
        type: String,
        required: true 
    },
    linkedIn: String,
    aboutMe : String,
    skills : [
        {
            skill: String,
            cat:String
        }
    ],
},{
    collection: 'Me'
});

module.exports = meSchema;