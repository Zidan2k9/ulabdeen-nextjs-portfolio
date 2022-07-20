import Link from "next/link";
import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import third_year_project_img from "../public/assets/projects/escape.jpg";

const third_year_project = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={third_year_project_img}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 dark:text-green-600">
            Third Year Project - Escape - A 2D sidescroller video game developed
            in Unity3D Game Engine as part of a team of four.
          </h2>
          <h3 className="dark:text-green-700">
            Unity3D Game Engine, C# and JavaScript
          </h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-xl">
            My role in this project included implementing UI and gameplay
            functionalities.
          </p>
          <p>
            Escape is a 2D hack and slash game that was developed by a group of
            4 people including myself. The game contains 2 characters: an archer
            and a brute. These characters have been trapped in the king&apos;s
            castle and the objective is to escape beyond the castle walls. The
            archer is quick, agile and delivers damage to enemies in short
            bursts while the brute is slow and delivers a devastating amount of
            damage that needs to be replenished. The more enemies and challenges
            overcome the more XP points the player will gain. Gain enough XP
            points and the characters will level up to access new abilities and
            deliver more damage.
          </p>

          <p>
            My role within the team was to design, implement and test the
            game&apos;s GUI system which includes health, mana(magic) and XP
            bars. I also implemented and tested the character switching
            mechanism. The characters can be switched using the Num1 and Num2
            keys. I was also given the task of designing and testing a main
            menu. This was achieved by using a Unity Asset called Necromancer
            GUI that can be found{" "}
            <a href="https://assetstore.unity.com/packages/2d/gui/necromancer-gui-366">
              here
            </a>
            . The menu&apos;s unique design and functionality was scripted using
            C#.
          </p>

          <a href="https://github.com/Zidan2k9/EscapeTeamProject">
            <button className="px-8 py-2 mt-4 mr-8 text-green-100">
              GitHub repository
            </button>
          </a>
          <a href="https://www.youtube.com/watch?v=hTZOBFjj69Q">
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
                .NET
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                Unity3D Game Engine
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                C#
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                JavaScript
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

export default third_year_project;
