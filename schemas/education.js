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
    award : String
},{
    collection: 'Education'
});

module.exports = EducationSchema;