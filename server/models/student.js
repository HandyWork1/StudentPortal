const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    StudentName:{
        type: String,
        required: true,

    },
    StudentID:{
        type: Number,
        required: true,

    },

    StudentCourses:{
        type: String,
        required: true,

    }

});

module.exports =mongoose.model("Student", StudentSchema);