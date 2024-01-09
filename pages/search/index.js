import Courses from "@/components/templates/search/Courses";
import coursesModel from "@/models/course";
import connectToDB from "@/utils/db";

const index = ({ coursesList }) => {
  return <Courses coursesList={coursesList} />;
};

export default index;

export async function getServerSideProps({ query }) {
  connectToDB();
  const regex = new RegExp(query.q, "i");
  const res = await coursesModel.find({ title: { $regex: regex } });
  const coursesList = JSON.parse(JSON.stringify(res));

  return {
    props: {
      coursesList,
    },
  };
}
