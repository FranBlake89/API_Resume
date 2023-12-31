const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema ({
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
                    type: String,
                    required: true,
                }
            ]
}, {
    collection: 'Projects'
});

module.exports =  projectSchema;