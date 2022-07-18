import Link from "next/link";
import Image from "next/image";
import React from "react";
import smart_brain_img from "../public/assets/projects/smart_brain.png";
import { RiRadioButtonFill } from "react-icons/ri";

const smart_brain = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={smart_brain_img}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 dark:text-green-600">
            Smart Brain Facial Recognition App
          </h2>
          <h3 className="dark:text-green-700">Node, React, PostgreSQ;</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-xl">Full Stack Web Application </p>
          <p>
            Smart Brain is a facial image recognition website that reads an
            image URL given by the user. Using this URL, Smart Brain displays
            the image and then highlights a face that is present. For the time
            being Smart Brain doesn&apos;t support multiple faces. Users can
            register and sign in and the website will keep track of the number
            of entries made by the user.
          </p>

          <a href="https://smart-brain-zain.herokuapp.com/">
            <button className="px-8 py-2 mt-4 mr-8 text-green-100">
              Live Demo
            </button>
          </a>
          <a href="https://github.com/Zidan2k9/smart-brain">
            <button className="px-8 py-2 mt-4 mr-8 text-green-100">
              Front End GitHub Repository
            </button>
          </a>
          <a href="https://github.com/Zidan2k9/smart-brain-api">
            <button className="px-8 py-2 mt-4 mr-8 text-green-100">
              Back End GitHub Repository
            </button>
          </a>
          <a href="https://youtu.be/FtZfI5vn9aQ">
            <button className="px-8 py-2 mt-4 mr-8 text-green-100">
              Video Demo
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-green-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 dark:text-green-400">
              Stack
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                HTML
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                CSS
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                JavaScript
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                Node
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                React
              </p>
              <a
                className="underline"
                href="https://docs.clarifai.com/api-guide/predict/images"
              >
                <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                  <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                  Clarifai Facial Recognition API
                </p>
              </a>

              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                PostgreSQL
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                Postman
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                Heroku
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                Git
              </p>
            </div>
          </div>
        </div>
        <Link href="/#work">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default smart_brain;
