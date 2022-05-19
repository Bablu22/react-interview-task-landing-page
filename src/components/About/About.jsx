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
      <div class="lg:grid grid-cols-2 gap-2 w-full px-4">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 py-3">
              A Few Words About Us
            </h2>
            <p className="text-justify">
              Safeerul Qur’an (SQ) is an open online education platform for the
              muslim populous to understand and learn the true meaning and
              become an ‘ambassador’ of The Holy Qur’an. Anyone becomes an
              ambassador by further spreading the light of Islamic knowledge,
              living and acting in accordance with the values and ethics of The
              Qur'an in daily life. To raise a generation that will always be
              led by the Qur'an and Sunnah, and who will remain profoundly
              connected to Allah SWT, His Messenger ((صلى الله عليه وسلم, the
              righteous caliphs, and legitimate scholars in their life and death
              decisions. We seek to create a diverse set of Qur'anic Arabic
              study and teaching tools that serve a variety of age and
              cultural-linguistic groups. Safeerul Quran combines practical
              learning with real-life experiences to make learning as simple,
              enjoyable, quick, and relevant as possible. One of our top aims is
              to create a world-class teaching program for Qur'anic Arabic and
              education. Students are better prepared to become leaders and
              upstanding citizens if a culture of confidence, independence, and
              accountability is established.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
