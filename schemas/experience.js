const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const experienceSchema = new Schema (
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
},{
  collection: 'Experience'
});

module.exports = experienceSchema;