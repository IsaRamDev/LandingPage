import React from "react";
import Card from "../components/Card";
import myData from "../constants/data";

function Project() {
  const count = myData.projects.length;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
          {count} Projects & Counting
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Built to Solve.<br className="hidden md:block" /> Designed to Impress.
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          From real-time dashboards to live e-commerce sites — every project here solves a real problem with clean code and sharp UI.
          <span className="text-rose-400 font-medium"> Hover a card to learn more.</span>
        </p>
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
