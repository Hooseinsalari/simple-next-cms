import CoursesItem from "@/components/modules/coursesItem/CoursesItem";
import { useState } from "react";
import AddCourseModal from "./AddCourseModal";
import styles from "@/styles/Course.module.css";

const Course = ({ coursesList }) => {
  const [data, setData] = useState([...coursesList]);
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);

  const hideAddCourseModal = () => setShowAddCourseModal(false);

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
          <h2 className={styles.courses_title}>دوره ها</h2>
          <a
            href="#"
            className={styles.new_course_btn}
            onClick={() => setShowAddCourseModal(true)}
          >
            اضافه کردن دوره جدید
          </a>
        </div>
        <ul className={styles.courses_list}>
          {data.map((item) => (
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

      {showAddCourseModal && (
        <AddCourseModal
          getCourses={getCourses}
          hideAddCourseModal={hideAddCourseModal}
        />
      )}
    </>
  );
};

export default Course;
