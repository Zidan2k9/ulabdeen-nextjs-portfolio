import React from "react";
import WorkItem from "./WorkItem";
import propertyImg from "../public/assets/projects/property.jpg";
import crypto from "../public/assets/projects/crypto.jpg";
import netflix from "../public/assets/projects/netflix.jpg";
import twitch from "../public/assets/projects/twitch.jpg";

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
            title="Property Finder"
            technologies="ReactJS"
            backgroundImg={propertyImg}
            workUrl="/property"
          />
          <WorkItem
            title="Crypto App"
            technologies="ReactJS"
            backgroundImg={crypto}
            workUrl="/crypto_app"
          />
          <WorkItem
            title="Netflix Clone"
            technologies="ReactJS"
            backgroundImg={netflix}
            workUrl="/netflix_clone"
          />
          <WorkItem
            title="Twitch Clone"
            technologies="ReactJS"
            backgroundImg={twitch}
            workUrl="/twitch_clone"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
