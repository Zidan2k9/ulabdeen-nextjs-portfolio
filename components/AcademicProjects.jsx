import React from "react";
import WorkItem from "./WorkItem";
import lunar_destiny from "../public/assets/projects/lunar_destiny.png";
import real_estate from "../public/assets/projects/real_estate.png";
import smart_brain_img from "../public/assets/projects/smart_brain.png";
import contacts_keeper from "../public/assets/projects/contacts_keeper.png";

const AcademicProjects = () => {
  return (
    <div className="w-full bg-green-white-0">
      <div id="work" className="max-w[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-green-white-8">
          My Academic Projects
        </p>
        <h2 className="py-4">BSc, BSc Honours and MSc</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <WorkItem
            title="Smartphone Based Real-Time Object Detection Solution To Aid In Navigation For Individuals With Physical Disabilities"
            technologies="Unity3D Game Engine, C# and JavaScript"
            backgroundImg={contacts_keeper}
            workUrl="/masters_project"
          />

          {/* BSc Hons */}
          {/* <WorkItem
            title="Smartphone Based Real-Time Object Detection Solution To Aid In Navigation For Individuals With Physical Disabilities"
            technologies="Unity3D Game Engine, C# and JavaScript"
            backgroundImg={contacts_keeper}
            workUrl="/masters_project"
          /> */}
          {/* BSc  */}
          {/* <WorkItem
            title="Smartphone Based Real-Time Object Detection Solution To Aid In Navigation For Individuals With Physical Disabilities"
            technologies="Unity3D Game Engine, C# and JavaScript"
            backgroundImg={contacts_keeper}
            workUrl="/masters_project"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default AcademicProjects;
