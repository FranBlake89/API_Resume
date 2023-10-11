const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const experienceSchema = new Schema ({
    experience:[
        {
            title: {
                type: String,
                required: true,
              },
              company: {
                type: String,
                required: true,
              },
              range: String,
            responsabilities: [String]
        }
    ]
});

module.exports = mongoose.model("Experience", experienceSchema);