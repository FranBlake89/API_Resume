const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const EducationSchema = new Schema ({
    institution : {
        type: String,
        required: true
    },
    major: {
        type: String,
        required: true
    },
    gradDate: {
        type: String,
        required: true
    },
    country:{
        name: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        }
    },
    awards : {
        type: String,
        default: ""
    }
},{
    collection: 'Education'
});

module.exports = EducationSchema;