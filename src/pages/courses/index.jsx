import MainLayout from "@layouts/Main";
import React, { useRef, useEffect, useState } from "react";
import TopNav from "@components/Navbars/TopNav";
import Navbar from "@components/Navbars/AppNav/OnePageNav";
import navbarScrollEffect from "@common/navbarScrollEffect";
import courses from "../../data/App/courses.json";
import Modal from "@components/App/Modal";
import CourseItem from "@components/App/CourseItem";

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

export default Courses;
