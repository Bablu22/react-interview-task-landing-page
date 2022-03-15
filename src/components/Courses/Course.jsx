import React from "react";

const Course = ({ course }) => {
  const { name, img } = course;

  return (
    <>
      <div className="w-full border  p-4">
        <div className="bg-white rounded-lg overflow-hidden mb-10">
          <img src={img} className="w-full rounded" alt="" />
          <div className="text-center">
            <h3>
              <a
                href="/"
                className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        mt-8
                        hover:text-primary
                        "
              >
                {name}
              </a>
            </h3>

            <a
              href="/"
              className="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     transition
                     "
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
