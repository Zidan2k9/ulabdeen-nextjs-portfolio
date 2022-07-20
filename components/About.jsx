import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 bg-green-white-0"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-green-white-8">
            About Me
          </p>
          <h2 className="py-4">My Journey</h2>
          <p className="py-2 text-green-white-9">
            I&apos;m a MSc Private Cloud Technologies graduate from the Atlantic
            Technical University, Letterkenny. Currently looking for full-time
            roles in Software Development.
          </p>
          <p className="py-2 text-green-white-9">
            I have also completed Level 7 and Level 8 BSc degrees in Computing
            and Computer Games Development between the years of 2012-2016 from
            the Letterkenny Institute of Technology (now ATU, Letterkenny)
          </p>
          <p className="py-2 text-green-white-9">
            In between my studies, I changed my focus from Games Development to
            Full Stack Development and learned how to design and implement user
            requirements for websites and web apps with technologiess including
            CSS, JavaScript, React, Express.js, Python, Django and MongoDB.
            Following the completion of my studies, I have been improving my
            skillset on a daily basis and learning new technologies when
            required.
          </p>
          <p className="py-2 text-green-white-9 underline cursor-pointer">
            My most recent projects can be found here
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-green-white-9 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 dark:shadow-green-400">
          <Image
            className="rounded-xl"
            width="1080"
            height="720"
            src="https://source.unsplash.com/LKsHwgzyk7c"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
