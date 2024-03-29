import DeleteModal from "@/components/templates/index/DeleteModal";
import EditModal from "@/components/templates/index/EditModal";
import { useState } from "react";
import styles from "@/styles/Course.module.css";
const CoursesItem = ({ title, image, id, getCourses }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const hideEditModal = () => setShowEditModal(false);
  const hideDeleteModal = () => setShowDeleteModal(false);

  const deleteHandler = async () => {
    const res = await fetch(`http://localhost:3000/api/courses/${id}`, {
      method: "DELETE",
    });

    if (res.status === 200) {
      alert("Product successfully removed");
      setShowDeleteModal(false);
      getCourses();
    }
  };

  const updateHandler = async (e, newCoursesDetail) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:3000/api/courses/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoursesDetail),
    });

    if (res.status === 200) {
      alert("Product successfully update");
      setShowEditModal(false);
      getCourses();
    }
  };

  return (
    <>
      <li className={styles.courses_item}>
        <div className={styles.courses_img_title}>
          <img
            src={image}
            alt="course-item-img"
            className={styles.courses_img}
          />
          <h5 className={styles.courses_name}>{title}</h5>
        </div>
        <div className={styles.courses_btns}>
          <a
            href="#"
            className={styles.courses_btn_edit}
            onClick={() => setShowEditModal(true)}
          >
            {" "}
            ویرایش{" "}
          </a>
          <a
            href="#"
            className={styles.courses_btn_delete}
            onClick={() => setShowDeleteModal(true)}
          >
            {" "}
            حذف{" "}
          </a>
        </div>
      </li>
      {showEditModal && (
        <EditModal hideEditModal={hideEditModal} onUpdate={updateHandler} />
      )}
      {showDeleteModal && (
        <DeleteModal
          hideDeleteModal={hideDeleteModal}
          onDelete={deleteHandler}
        />
      )}
    </>
  );
};

export default CoursesItem;
