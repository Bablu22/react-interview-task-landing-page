import React from "react";
import About from "../About/About";
import BannerSlider from "../BannerSlider/BannerSlider";
import Courses from "../Courses/Courses";
import Footer from "../Footer/Footer";
import Forerunners from "../Forerunners/Forerunners";
import Header from "../Header/Header";
import Message from "../Message/Message";

const Home = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <BannerSlider />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Forerunners />
      </div>
      <div>
        <Courses />
      </div>
      <div>
        <Message />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
