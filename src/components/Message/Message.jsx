import React, { useEffect } from "react";
import image from "../../images/message.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Message = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="fade-up" className="bg-slate-100 mt-20 py-10">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center font-semibold text-red-800 py-10">
          Chairman's Message
        </h2>
        <img
          className="w-28 h-28 rounded-full border border-4 border-red-800 p-1 mx-auto"
          src={image}
          alt=""
        />
        <h3 className="text-center text-sky-800 font-semibold text-xl py-5">
          DR ABUL KALAM AZAD
        </h3>
        <p className="w-3/5 mx-auto">
          " In the name of Allah, The Most Gracious, The Most Merciful. All
          Praise be to Allah SWT, and peace and blessings be upon His Messenger,
          Muhammad PBH. Our beloved Prophet (plug dulc all to (said: “The best
          of you is the one who learns The Qur'an and teaches it (to others)".
          But today out of all Non-Arab Muslims across the world almost 90% of
          them do not understand the language of Al Qur'an. The problem remains
          - if they don't understand how would they ponder and follow the
          guidance of Allah SWT in their day to day life? Let's look at what
          happens when someone attempts to learn and understand The Qur'an by
          learning Qur'anic Arabic. How many of you started and then stopped
          just because you found it hard, boring and gave up at the end. Some
          may have tried again with another course then failed again. Sounds
          familiar? We hear this all the time. In this way, millions of
          believers have stayed away from The Qur'an and do not know that The
          Qur'an is a literary miracle – really, a full blown miracle !! - and
          in order to witness it, you need to simply learn the language and you
          will witness a miracle with your very own eyes. One could easily
          mistake Qur'anic Arabic as a subject only the scholars, teachers and
          Madrasha students can understand. However, that is not the case. Allah
          SWT cannot be wrong as He said in The Qur'an that "We have made The
          Qur'an easy for remembrance, so is there anyone who will remember and
          pay attention?" The good news - Mini Safeerul Qur'an course has proved
          that it is easy to learn and understand Qur'anic Arabic. The students
          of Safeerul Qur'an Institute are living proof for that. This booklet
          is a complete resource for those who are busy and would like the easy
          way to learn and understand The Qur'an in Allah's language that is
          Arabic. It is designed keeping everyone in mind so it is bound to be
          useful and meaningful no matter your age, gender etc. This booklet is
          especially beneficial for teachers to use as a tool to teach others.
          May Allah accept our intention and forgive our mistakes."
        </p>
      </div>
    </div>
  );
};

export default Message;
