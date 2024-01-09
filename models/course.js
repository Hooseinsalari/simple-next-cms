const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
});

const Course = mongoose.models.Course || mongoose.model("Course", schema);

export default Course;
