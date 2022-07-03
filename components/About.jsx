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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
            deserunt.
          </p>
          <p className="py-2 text-green-white-9">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laudantium, tenetur eligendi fugiat vel minima est corporis harum
            voluptatem beatae expedita neque voluptatum inventore officiis?
            Dicta assumenda debitis eos beatae sit!
          </p>
          <p className="py-2 text-green-white-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic itaque
            ipsam molestiae pariatur incidunt quod impedit error dolore nisi?
            Delectus eligendi dolores odit ad laborum sed animi doloribus
            obcaecati dolorum autem aperiam fugiat quae suscipit provident
            distinctio, sunt voluptatibus nisi.
          </p>
          <p className="py-2 text-green-white-9 underline cursor-pointer">
            My most recent projects can be found here
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-green-white-9 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://source.unsplash.com/LKsHwgzyk7c"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
