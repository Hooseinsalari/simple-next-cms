const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
});

const coursesModel = mongoose.models.Course || mongoose.model("Course", schema);

export default coursesModel;
