import React, { useEffect, useState } from "react";
import Foreruner from "./Foreruner";
import "./Forerunners.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Forerunners = () => {
  const [foreruners, setForeruners] = useState([]);

  useEffect(() => {
    fetch("/forerunners.json")
      .then((res) => res.json())
      .then((data) => setForeruners(data));
  }, []);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="fade-up" className="forerunners">
      <div className="container mx-auto px-3">
        <h2 className="text-4xl font-semibold text-center text-white mb-16">
          Forerunners
        </h2>
        <div class="lg:grid grid-cols-4 gap-4">
          {foreruners.map((foreruner) => (
            <Foreruner key={foreruner.name} foreruner={foreruner} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forerunners;
