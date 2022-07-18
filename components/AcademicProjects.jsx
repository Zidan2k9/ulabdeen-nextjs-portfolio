import React from "react";
import WorkItem from "./WorkItem";

const AcademicProjects = () => {
  return (
    <div className="w-full bg-green-white-0">
      <div id="work" className="max-w[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-green-white-8">
          My Academic Projects
        </p>
        <h2 className="py-4">Work Experience and Projects</h2>
        <div className="grid md:grid-cols-2 gap-8"></div>
      </div>
    </div>
  );
};

export default AcademicProjects;
