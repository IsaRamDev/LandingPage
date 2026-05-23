import React from "react";
import Card from "../components/Card";
import myData from "../constants/data";

function Project() {
  const count = myData.projects.length;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-5">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900">My Projects</h2>
          <p className="text-gray-400 text-sm mt-0.5">Hover a card to read about each one</p>
        </div>
        <div className="flex flex-col items-center bg-rose-400 text-white rounded-2xl px-5 py-3 shadow-lg shadow-rose-200">
          <span className="text-4xl font-black leading-none">{count}</span>
          <span className="text-xs font-semibold uppercase tracking-widest mt-1 opacity-90">Projects</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {myData.projects.map((proj, key) => (
          <Card
            title={proj.title}
            link={proj.link}
            imgUrl={proj.imgUrl}
            github={proj.github}
            stack={proj.stack}
            description={proj.description}
            key={key}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
