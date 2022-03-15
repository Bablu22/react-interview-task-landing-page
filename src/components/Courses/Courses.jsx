import React, { useEffect, useState } from "react";
import Course from "./Course";
import AOS from "aos";
import "aos/dist/aos.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div data-aos="fade-up" className="my-20 container mx-auto">
      <h2 className="text-4xl text-center font-semibold text-red-800 mb-16">
        Ongoing Cources
      </h2>
      <div class="lg:grid grid-cols-4 gap-4">
        {courses.map((course) => (
          <Course key={course.name} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
