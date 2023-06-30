import MainLayout from "@layouts/Main";
import React, { useRef, useEffect, useState } from "react";
import TopNav from "@components/Navbars/TopNav";
import Navbar from "@components/Navbars/AppNav/OnePageNav";
import navbarScrollEffect from "@common/navbarScrollEffect";
import courses from "../../data/App/courses.json";
import Modal from "@components/App/Modal";

const Courses = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <MainLayout>
      <TopNav style="4" />
      <Navbar navbarRef={navbarRef} />
      <main style={{ marginTop: "-12px" }}>
        <div className="courses">
          {courses.map((course) => (
            <CourseItem 
              pdf={course.pdf}
              key={course.title}
              text={course.text}
              title={course.title}
              image={course.image}/>
          ))}
        </div>
      </main>
    </MainLayout>
  );
};

const CourseItem = ({ pdf, title, text, image}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal pdf={pdf} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <div className="courses-item">
        <div className="courses-item-info">
          <h1 className="courses-item-title">{title}</h1>
          <div className="courses-item-body">{text}</div>
          <button className="pdf-btn" onClick={() => setIsOpen(true)}>
            Силлабус
          </button>
        </div>
        <div className="courses-item-img">
          <img src={image} alt="" />
        </div>
      </div>
    </>
  );
};

export default Courses;
