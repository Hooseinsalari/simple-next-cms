import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCashRegister,
  faFile,
  faTag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Modal.module.css";
import { useState } from "react";

const AddCourseModal = ({ hideAddCourseModal, getCourses }) => {
  const [coursesDetail, setCoursesDetail] = useState({
    title: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coursesDetail),
    });

    if (res.status === 201) {
      setCoursesDetail({
        title: "",
      });

      alert(res.statusText);
      getCourses()
    }
  };

  return (
    <div className={styles.modal_container} id="add-new-course-modal">
      <div className={styles.modal_bg} onClick={hideAddCourseModal}></div>
      <div className={styles.modal_content}>
        <h1 className={styles.modal_title}>اضافه کردن دوره جدید</h1>
        <form onSubmit={submitHandler} className={styles.edit_user_form}>
          <div className={styles.input_field}>
            <span>
              <FontAwesomeIcon icon={faTag} />
            </span>
            <input
              value={coursesDetail.title}
              onChange={(e) => setCoursesDetail({ title: e.target.value })}
              name="title"
              type="text"
              placeholder="نام دوره"
              spellCheck="false"
            />
          </div>

          <button type="submit" className={styles.update_btn}>
            اپدیت دوره
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourseModal;
