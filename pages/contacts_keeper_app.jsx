import Link from "next/link";
import Image from "next/image";
import React from "react";
import contacts_keeper from "../public/assets/projects/contacts_keeper.png";
import { RiRadioButtonFill } from "react-icons/ri";

const contact_keeper_app = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={contacts_keeper}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 dark:text-green-600">Contacts Keeper MERN App</h2>
          <h3 className="dark:text-green-700">React, Express, Node, MongoDB</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-xl">
            A full stack web app for storing contacts created using the MERN
            stack
          </p>
          <p>
            A web app where users can store contact information (name, email and
            phone number). Users must first register and login to use the app. I
            created this app to help me improve my skills in full stack web
            development. By completing this project I have gained the knowledge
            and skills required to create, test and connect a custom API with
            the front end.
          </p>

          <p>Features:</p>

          <ul className="list-disc">
            <li>
              The first phase of the project involved creating a custom API
              using Express that would allow the user to register, login and
              perform CRUD operations for a contact object. Postman was used to
              test the various requests on a local server.
            </li>
            <li>
              The first phase of the project involved creating a custom API
              using Express that would allow the user to register, login and
              perform CRUD operations for a contact object. Postman was used to
              test the various requests on a local server.
            </li>
            <li>
              For the front end side of the, the functionality was implemented
              using a component based approach. Contact information, contact
              filtering, the contact form and animations had their own seperate
              components.
            </li>
            <li>
              Hooks were used to break down app functionality in the following
              structure: State, Context and Reducer. State and Context files
              contained a component&apos;s functionality while a reducer was
              used to communicate with the MongoDB cluster. The components for
              the contacts, alerts and user authentication were implemented
              using this structure.
            </li>
            <li>
              JSON Web Tokens provided a layer of authentication to prevent
              non-logged in users from accessing private routes. Each user is
              assigned their own web token, the web token is destroyed upon
              logging out, ensuring that a user&apos;s contacts are not visible
              to anyone else.
            </li>
          </ul>

          <a href="http://bit.ly/2LyrpZj">
            <button className="px-8 py-2 mt-4 mr-8 text-green-100">
              Live Demo
            </button>
          </a>
          <a href="https://github.com/Zidan2k9/contact-keeper-react">
            <button className="px-8 py-2 mt-4 mr-8 text-green-100">
              GitHub repository
            </button>
          </a>
          <a href="https://youtu.be/e8I-0vD6KfQ">
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
                MongoDB
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                Express
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                React
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                Node
              </p>
              <a
                className="underline"
                href="https://www.npmjs.com/package/bcrypt"
              >
                <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                  <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                  bcrypt
                </p>
              </a>
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

export default contact_keeper_app;
