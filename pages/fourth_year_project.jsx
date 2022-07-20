import Link from "next/link";
import Image from "next/image";
import React from "react";
import fourth_year_project_img from "../public/assets/projects/finalyearproject_resized.jpg";
import { RiRadioButtonFill } from "react-icons/ri";

const fourth_year_project = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={fourth_year_project_img}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 dark:text-green-600">
            Investigation into the memory usage of A* heuristics using a large
            2d gridmap
          </h2>
          <h3 className="dark:text-green-700">
            Unity3D Game Engine, C# and JavaScript
          </h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-xl">
            My 4th year project related to the memory usage of the A* shortest
            path finding algorithm and it&apos;s heuristics.
          </p>
          <p>
            My 4th year project was the investigation into the memory usage of
            A* heursitics using a large 2d grid map. A* is a shortest path
            algorithm that finds the shortest path between 2 points on a map.
          </p>

          <p>
            It is commonly used in programming AI in NPCs(non-player characters
            in video games).A* is a variation of the Dijkstra shortest path
            algorithm. The difference between the two algorithms is that A* uses
            a heuristic to speed up the pathfinding process. The drawback
            however is that if a poor heuristic is used, A* will consume more
            memory when traversing through a large map. This means it takes
            longer to find a path.
          </p>

          <p>
            The aim of the project is to identify the memory usage of a number
            of heuristics. A* is also used in real world applications where map
            traversal is required.
          </p>

          <p>Heuristics tested on A* include: </p>

          <ul className="list-disc list-inside">
            <li>Pythagoras</li>
            <li>Euclidean</li>
            <li>Manhattan</li>
          </ul>

          <a href="https://github.com/Zidan2k9/FourthYearProject">
            <button className="px-8 py-2 mt-4 mr-8 text-green-100">
              GitHub repository
            </button>
          </a>
          <a href="https://www.youtube.com/watch?v=5G8VV7cdJ7s">
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

export default fourth_year_project;
