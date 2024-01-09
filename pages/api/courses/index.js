import coursesModel from "@/models/course";
import connectToDB from "@/utils/db";

export default async function handler(req, res) {
  connectToDB();

  const { method } = req;

  if (method === "GET") {
    const courses = await coursesModel.find({});

    if (courses) {
      return res.status(200).json(courses);
    }
  } else if (method === "POST") {
    try {
      const { title } = req.body;

      if (!title.trim() || title.length < 5) {
        return res.status(422).json({ message: "Title is not valid!" });
      }

      await coursesModel.create({ title });

      return res
        .status(201)
        .json({ message: "New course create successfully!" });
    } catch (error) {
      return res.status(500).json({
        message: "Unknown internal server error",
      });
    }
  }
}
