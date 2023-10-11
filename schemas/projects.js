const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema ({
    projects: [
        {
            title: {
                type: String,
                required: true,
            },
            repo: {
                type: String,
                required: true,
            },
            website: String,
            description: String,
            stack: [
                {
                    stack: String
                }
            ]
        }
    ],
});

module.exports = mongoose.model("Projects", projectSchema);