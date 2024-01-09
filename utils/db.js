const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    if (mongoose.connection[0].readyState) {
      return false;
    }

    await mongoose.connect("mongodb://localhost:27017/cms-project");
    console.log("Data base connected Successfully");
  } catch (error) {
    console.log("Data base connection faild", error);
  }
};

export default connectToDB;
