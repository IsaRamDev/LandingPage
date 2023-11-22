import React from "react";
import Card from "../components/Card";
import myData from "../constants/data";

function Project() {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      {myData.projects.map((proj, key) => (
        <Card
          title={proj.title}
          link={proj.link}
          imgUrl={proj.imgUrl}
          github={proj.github}
          stack={proj.stack}
          key={key}
        />
      ))}
    </div>
  );
}

export default Project;
