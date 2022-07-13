import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import {
  FaGithub,
  FaHackerrank,
  FaLinkedinIn,
  FaStackOverflow,
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center bg-green-white-0">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-green-white-10">
            I LOVE TO BRING WEBSITES TO LIFE!
          </p>
          <h1 className="py-4 text-green-white-8">
            Hello, I'm <span className="text-green-white-5">Zain</span>
          </h1>
          <h1 className="py-2 text-green-white-10">
            I'm A Passionate Software Developer
          </h1>
          <p className="py-4 text-green-white-10 max-w-[70%] m-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            quae sequi adipisci et labore. Maiores laboriosam minus eum fugit
            modi excepturi, quaerat temporibus dolores ab consequuntur, omnis
            possimus at pariatur.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-150 ease-in-out duration-300 dark:shadow-green-400">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-150 ease-in-out duration-300 dark:shadow-green-400">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-150 ease-in-out duration-300 dark:shadow-green-400">
              <FaStackOverflow />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-150 ease-in-out duration-300 dark:shadow-green-400">
              <FaHackerrank />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-150 ease-in-out duration-300 dark:shadow-green-400">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-150 ease-in-out duration-300 dark:shadow-green-400">
              <BsFillPersonFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
