import React from "react";
import WorkItem from "./WorkItem";
import contacts_keeper from "../public/assets/projects/contacts_keeper.png";
import fourth_year_project_img from "../public/assets/projects/finalyearproject_resized.jpg";
import third_year_project_img from "../public/assets/projects/escape.jpg";

const AcademicProjects = () => {
  return (
    <div className="w-full bg-green-white-0">
      <div id="work" className="max-w[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-green-white-8">
          My Academic Projects
        </p>
        <h2 className="py-4">MSc, BSc (Honours) and BSc</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <WorkItem
            title="MSc - Smartphone Based Real-Time Object Detection Solution To Aid In Navigation For Individuals With Physical Disabilities"
            technologies="Android Studio, Deep Learning, Google Colab"
            backgroundImg={contacts_keeper}
            workUrl="/masters_project"
          />

          {/* BSc Hons */}
          <WorkItem
            title="
            BSc (Honours) - Investigation into the memory usage of A* heuristics using a large 2D gridmap"
            technologies="Unity3D Game Engine, C# and JavaScript"
            backgroundImg={fourth_year_project_img}
            workUrl="/fourth_year_project"
          />
          {/* BSc  */}
          <WorkItem
            title="BSc - Escape - Team Project"
            technologies="Unity3D Game Engine, C# and JavaScript"
            backgroundImg={third_year_project_img}
            workUrl="/third_year_project"
          />
        </div>
      </div>
    </div>
  );
};

export default AcademicProjects;
