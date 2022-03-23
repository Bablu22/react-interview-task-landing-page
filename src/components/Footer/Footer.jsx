import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800">
        <div className="flex justify-center items-center p-10 ">
          <div className="max-w-2xl bg-white py-10 px-5 m-auto w-full mt-10">
            <div className="">
              <h3 className="text-xl text-center font-medium text-gray-800">
                Have Question
              </h3>
              <h2 className="text-4xl text-center font-semibold text-red-800 mb-16">
                Send Message
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-xl m-auto">
              <div className="col-span-2 lg:col-span-1">
                <input
                  type="text"
                  className="border-solid border-gray-400 border p-2 md:text-xl w-full"
                  placeholder="Name"
                />
              </div>

              <div className="col-span-2 lg:col-span-1">
                <input
                  type="text"
                  className="border-solid border-gray-400 border p-2 md:text-xl w-full"
                  placeholder="Phone"
                />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <input
                  type="email"
                  className="border-solid border-gray-400 border p-2 md:text-xl w-full"
                  placeholder="Email"
                />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <input
                  type="text"
                  className="border-solid border-gray-400 border p-2 md:text-xl w-full"
                  placeholder="Subject"
                />
              </div>

              <div className="col-span-2">
                <textarea
                  cols="30"
                  rows="3"
                  className="border-solid border-gray-400 border p-2 md:text-xl w-full"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="col-span-2 text-right">
                <button className="py-3 px-6 bg-green-500 rounded text font-medium w-full sm:w-32">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-300 sm:text-center">
            Copyright © 2022
            <a href="https://flowbite.com">™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
            <a
              href="https://www.facebook.com/TheAdviser.Info/"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <BsFacebook />
            </a>
            <a
              href="https://www.instagram.com/accounts/login/?next=/theadviser.info/"
              className="text-gray-400 hover:text-white"
              target="_blank"
            >
              <FaInstagramSquare />
            </a>
            <a href="#/" className="text-gray-400 hover:text-white">
              <SiGmail />
            </a>
            <a
              href="https://twitter.com/TheAdviser_Info?fbclid=IwAR3w50yWMQmhlKy_SoyOIBixM-lruywewldprH6NoW4_pqOJWkHCVc3KmBE"
              className="text-gray-400 hover:text-white"
              target="_blank"
            >
              <BsTwitter />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
