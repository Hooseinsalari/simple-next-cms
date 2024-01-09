import CoursesItem from "@/components/modules/coursesItem/CoursesItem";
import styles from "@/styles/Course.module.css";

const Courses = ({ coursesList }) => {
  const getCourses = async () => {
    const res = await fetch("/api/courses");
    const coursesData = await res.json();

    if (res.status === 200) {
      setData(coursesData);
    }
  };

  return (
    <>
      <section className={styles.courses}>
        <div className={styles.courses_top}>
          <h2 className={styles.courses_title}>نتیجه سرچ</h2>
        </div>
        <ul className={styles.courses_list}>
          {coursesList.map((item) => (
            <CoursesItem
              key={item._id}
              title={item.title}
              image="/images/courses/PWA.jpg"
              id={item._id}
              getCourses={getCourses}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Courses;
