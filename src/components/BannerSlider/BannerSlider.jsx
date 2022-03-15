import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../images/slide2.jpg";
import image2 from "../../images/slide-4.jpg";
import bannerImage1 from "../../images/banner1.png";
import bannerImage2 from "../../images/banner2.png";
import "./Banner.css";

const BannerSlider = () => {
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        <div className="banner-img">
          <div className="banner-desc ">
            <img src={bannerImage1} alt="" />
            <img className="lg:w-1/2 lg:py-3 " src={bannerImage2} alt="" />
            <h1 className="lg:text-2xl py-3 ">
              “And we have certainly made the Qur'an easy for <br />{" "}
              remembrance, so is there any who will remember?"
            </h1>
            <h6 className="text-lg">"Surah - Al Qamar (54:32)"</h6>
          </div>
          <img className="slider-img" src={image1} alt="" />
        </div>
        <div className="banner-img">
          <div className="banner-desc">
            <img src={bannerImage1} alt="" />
            <img className="lg:w-1/2 lg:py-3" src={bannerImage2} alt="" />
            <h1 className="lg:text-2xl py-3 ">
              “And we have certainly made the Qur'an easy for <br />{" "}
              remembrance, so is there any who will remember?"
            </h1>
            <h6 className="text-lg">"Surah - Al Qamar (54:32)"</h6>
          </div>
          <img className="slider-img" src={image2} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default BannerSlider;
