import React from "react";
import {
  FaCss3,
  FaEye,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaLinux,
  FaNode,
  FaPython,
  FaReact,
  FaUnity,
} from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import {
  SiMongodb,
  SiAndroidstudio,
  SiCsharp,
  SiTensorflow,
  SiMicrosoftazure,
  SiMysql,
  SiJirasoftware,
  SiPostgresql,
  SiVmware,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiPostman,
  SiVirtualbox,
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { GrVirtualMachine, GrWindows } from "react-icons/gr";
import { TbApi } from "react-icons/tb";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 bg-green-white-0">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl -tracking-widest uppercase text-green-white-8">
          Skills
        </p>
        <h2 className="py-4">Technologies I Work With</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* start of skills tiles */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-green-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <FaHtml5 color="orange" size={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-green-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <FaCss3 size={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-green-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiTailwindcss color="turquoise" size={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-green-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <FaJs color="yellow" size={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-green-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <FaReact color="skyblue" size={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-green-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiNextdotjs size={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next.js</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-green-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiExpress size={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Express.js</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-green-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <FaNode color="green" size={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node.js</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-green-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <FaUnity size={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Unity3D Game Engine</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-green-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <FaGitAlt color="red" size={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Git</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-green-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiAndroidstudio color="green" size={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Android Studio</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-green-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <FaJava color="orange" size={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Java</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-green-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <FaLinux size={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Linux</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-green-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <FaPython size={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Python</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-green-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <DiDjango size={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Django</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-green-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiMongodb color="green" size={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-green-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiCsharp color="purple" size={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>C#</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-green-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <FaEye size={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Computer Vision</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-green-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiTensorflow color="orange" size={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Computer Vision</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-green-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiMicrosoftazure color="skyblue" size={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Microsoft Azure</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-green-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiMysql color="aqua" size={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MySQL</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-green-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiJirasoftware size={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JIRA Software</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-green-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiPostgresql size={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>PostgreSQL</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-green-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <GiArtificialIntelligence size={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Artificial Intelligence</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-green-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <TbApi size={64} />
              </div>
              <div className="flex flex-col items-center justify-center dark:shadow-green-400">
                <h3>REST API</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-green-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiPostman color="orange" size={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Postman</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-green-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiVmware size={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>VMWare ESXi, vSphere and Workstation</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-green-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiVirtualbox size={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Virtualisation</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-green-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <GrWindows size={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Windows Server 2016</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
