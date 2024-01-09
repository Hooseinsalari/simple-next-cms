import Course from "@/components/templates/index/Course";
import coursesModel from "@/models/course";
import connectToDB from "@/utils/db";

const index = ({ coursesList }) => {
  return <Course coursesList={coursesList} />;
};

export default index;

export async function getStaticProps() {
  connectToDB();
  const res = await coursesModel.find({});
  const coursesList = JSON.parse(JSON.stringify(res));

  return {
    props: {
      coursesList,
    },
    revalidate: 10,
  };
}
