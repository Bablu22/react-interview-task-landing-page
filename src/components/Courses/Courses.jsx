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
    <div data-aos="fade-up" className="my-20 container mx-auto w-full">
      <h2 className="text-4xl text-center font-semibold text-red-800 mb-16">
        Ongoing Cources
      </h2>
      <div class="lg:grid grid-cols-5 gap-4">
        {courses.map((course) => (
          <Course key={course.name} course={course} />
        ))}
      </div>
      <div className="w-full mx-auto block text-center">
        <button className=" px-5 py-2 text-white mt-10 bg-red-900">View More</button>
      </div>
    </div>
  );
};

export default Courses;
