import Link from "next/link";
import Image from "next/image";
import React from "react";
import lunar_destiny from "../public/assets/projects/lunar_destiny.png";
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
          src={lunar_destiny}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 dark:text-green-600">Lunar Destiny</h2>
          <h3 className="dark:text-green-700">
            Unity3D Game Engine / C#/ JavaScript
          </h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-xl">Work Experience</p>
          <h2 className="text-sm">September 2016 - April 2017</h2>
          <p>
            Lunar Destiny is a Virtual Reality rover racing game set on the Moon
            developed by Lunar Experiences. Players race against each other and
            AI to find resources hidden on the Moon. With these resources,
            players can build and expand their empire with the help of robots
            and 3D printing to create futuristic cities. Aside from battling
            each other, players will also have to be weary about governments who
            are also on the Moon.
          </p>

          <p>Responsabilities:</p>

          <ul className="list-disc">
            <li>
              Participating in Agile Methodology and complete assigned and
              self-assigned tasks in weekly and bi-weekly sprints with Trello
              for task assignment and management.
            </li>
            <li>
              Communicating with Senior Developer and Project Manager on a daily
              basis to discuss current progress, progress blockages and
              brainstorm potential solutions to blockages with Slack.
            </li>
            <li>
              Implementing UI, game functionality and network functionality
              based on the user requirements.
            </li>
            <li>
              Utilising .NET libraries with C# and JavaScript to implement
              requirements.
            </li>
            <li>
              Utilising Autodesk 3DS Max to create 3D model assets for the
              project.
            </li>
            <li>
              Participating in the testing of UI, gameplay and network
              functionality with team members.
            </li>
            <li>
              Provided feedback to the design and implementation of game assets
              and gameplay functionality of team members with Slack
            </li>
          </ul>

          <a href="https://www.youtube.com/watch?v=s-TIwvIXhUU">
            <button className="px-8 py-2 mt-4 mr-8 text-green-100">
              Demo Video
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
                Unity3D Game Engine
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                .NET
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                C#
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                JavaScript
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                Autodesk 3DS Max
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                Git
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                SourceTree
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                Slack
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                Trello
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
