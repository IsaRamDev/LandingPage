import Image from "next/image";

function ExperienceCard({
  companyName,
  jobTitle,
  description,
  imageUrl,
  startDate,
  endDate,
  location,
  link,
  skills,
}) {
  return (
    <>
      <div class="bg-white rounded-lg  p-3 flex">
        <div class="pr-5">
          <a href={link} target="_blank">
            <Image
              src={imageUrl}
              alt={companyName}
              class=" w-40 h-30 sm:w-16 sm:h-16 mr-4"
              width={500}
              height={500}
            />
          </a>
        </div>
        <div>
          <h3 class="text-xl font-bold">{jobTitle}</h3>
          <a href={link} target="_blank">
            <p class="text-lg">{companyName}</p>
          </a>
          <p class="text-gray-600 text-sm">
            {startDate} - {endDate}
          </p>
          <p class="text-gray-600 mb-4 text-sm">{location}</p>
          <div class="flex flex-col flex-grow">
            {description.map((item, index) => (
              <p key={index} class="text-gray-700 text-base">
                {item}
              </p>
            ))}
          </div>
          {skills && <p class="text-gray-800 py-2">{`Skills: ${skills}`}</p>}
        </div>
      </div>
      <div class="p-1">
        <div class="h-px bg-gray-300 flex-1"></div>
      </div>
    </>
  );
}

export default ExperienceCard;
