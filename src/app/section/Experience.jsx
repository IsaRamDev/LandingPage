import React from "react";
import myData from "../constants/data";
import ExperienceCard from "../components/ExperienceCard";

function Project() {
  return (
    <>
      {myData.experience.map((exp, key) => (
        <ExperienceCard
          companyName={exp.company}
          jobTitle={exp.title}
          description={exp.desc}
          imageUrl={exp.icon}
          startDate={exp.startDate}
          endDate={exp.endDate}
          location={exp.location}
          link={exp.companyLink}
          skills={exp.skills}
          key={key}
        />
      ))}
    </>
  );
}

export default Project;
