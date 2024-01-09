import connectToDB from "@/utils/db";

export default function handler(req, res) {
  connectToDB();
  return res.status(200).json({ message: "Welcome to cms project" });
}
