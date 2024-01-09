import coursesModel from "@/models/course";
import connectToDB from "@/utils/db";
import { isValidObjectId } from "mongoose";

export default async function handler(req, res) {
  connectToDB();

  const { method, query } = req;
  const { id } = query;

  if (method === "DELETE") {
    if (isValidObjectId(id)) {
      try {
        await coursesModel.findOneAndDelete({ _id: id });

        return res.json({ message: "Successfully removed" });
      } catch (error) {
        return res.status(500).json({ message: "Internal server error !" });
      }
    } else {
      return res.status(422).json({ message: "Course id is not valid !" });
    }
  }
}
