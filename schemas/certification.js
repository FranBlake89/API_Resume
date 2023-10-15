const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CertificationSchema = new Schema ({
    title: String,
    institution: String,
    imgURL: String,
    skills: [String]
},{
    collection: 'Certification'
});

module.exports = CertificationSchema;