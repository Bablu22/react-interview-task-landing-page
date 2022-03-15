import React, { useEffect } from "react";
import image from "../../images/about.png";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="fade-up" className="container mx-auto w-full my-20">
      <div class="lg:grid grid-cols-2 gap-4 w-full px-4">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 py-3">
              A Few Words About Us
            </h2>
            <p>
              Safeerul Qur'an Institute (SQI) is an open online education
              platform for the muslim populus to understand and learn the true
              meaning and become an 'ambassador' of The Holy Qur'an. Anyone
              becomes an ambassador by further spreading the light of Islamic
              knowledge, living and acting in accordance with the values and
              ethics of the Qur'an in daily life.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 py-3">
              SQI's Mission
            </h2>
            <p>
              To create a generation who will always be guided by The Qur'an and
              Sunnah, and remain deeply connected to Allah SWT, and His
              Messenger (plug dulc all to, (the righteous caliphs, and authentic
              scholars in their matters of life and death.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 py-3">
              Sol's Vision
            </h2>
            <p>
              We strive to develop a wide range of Qur'anic Arabic resources for
              learning and teaching that suit different age and
              cultural-linguistic groups. Safeerul Quran Institute incorporates
              practical learning and real-world experiences to make the learning
              as easy, fun, quick and relevant as possible. Developing a world
              class teacher programme for Qur'anic Arabic and education is one
              of our priorities. Building a culture of confidence, independence
              and accountability prepares students to become leaders and
              upstanding individuals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
