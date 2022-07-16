import Link from "next/link";
import Image from "next/image";
import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import { RiRadioButtonFill } from "react-icons/ri";

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={propertyImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 dark:text-green-600">Property Finder</h2>
          <h3 className="dark:text-green-700">
            React JS / Tailwind CSS/ Firebase
          </h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            odit aperiam reprehenderit quis necessitatibus deleniti eum
            provident amet velit excepturi laborum, perferendis in perspiciatis
            error illo enim adipisci earum laboriosam non harum inventore sed
            exercitationem doloremque vel! Consequuntur incidunt unde itaque
            maxime doloremque fugiat sapiente voluptatibus dicta id ducimus?
            Eligendi tenetur consequatur perspiciatis praesentium, sed libero
            magnam exercitationem voluptas ratione quaerat ad perferendis.
            Placeat cumque ut similique id ratione ducimus necessitatibus ullam
            voluptatem quibusdam voluptatum. Exercitationem voluptatum nostrum
            eos, mollitia temporibus tempora a ducimus, ab laboriosam adipisci
            nisi cumque fugiat! Nihil omnis, laborum aut deserunt fugiat
            laboriosam delectus et labore.
          </p>
          <button className="px-8 py-2 mt-4 mr-8 text-green-100">
            Web Link
          </button>
          <button className="px-8 py-2 mt-4 mr-8 text-green-100">
            Demo Video
          </button>
          <button className="px-8 py-2 mt-4 mr-8 text-green-100">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-green-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 dark:text-green-400">
              Stack
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                React
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                Tailwind CSS
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                JavaScript
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                Firebase
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                Google API
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                Zillow API
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

export default property;
