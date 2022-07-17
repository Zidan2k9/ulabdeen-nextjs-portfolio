import React from "react";
import WorkItem from "./WorkItem";
import propertyImg from "../public/assets/projects/property.jpg";
import lunar_destiny from "../public/assets/projects/lunar_destiny.png";
import real_estate from "../public/assets/projects/real_estate.png";

const Work = () => {
  return (
    <div className="w-full bg-green-white-0">
      <div id="work" className="max-w[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-green-white-8">
          My Work
        </p>
        <h2 className="py-4">Work Experience and Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <WorkItem
            title="Project Template"
            technologies="ReactJS"
            backgroundImg={propertyImg}
            workUrl="/project_template"
          />
          <WorkItem
            title="Lunar Destiny"
            technologies="Unity3D Game Engine, C# and JavaScript"
            backgroundImg={lunar_destiny}
            workUrl="/work_experience"
          />
          <WorkItem
            title="Full Stack Real Estate Website"
            technologies="Bootstrap, Python, Django, PostgreSQL"
            backgroundImg={real_estate}
            workUrl="/real_estate_website"
          />
          {/* <WorkItem
            title="Facial Recognition Web App"
            technologies="CSS, JavaScript, Node, React, PostgreSQL and Postman"
            backgroundImg={facial_recognition}
            workUrl="/facial_recognition"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Work;
