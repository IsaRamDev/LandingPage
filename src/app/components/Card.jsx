import Image from "next/image";
import Chip from "../components/Chip";
import { getBackground } from "../components/Badge";
import { BsGithub } from "react-icons/bs";

function Card({ title, github, imgUrl, link, stack }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-md h-auto">
      <div className="w-full h-56 relative">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={imgUrl}
            alt={`${title} portfolio`}
            width={1280}
            height={720}
            objectFit="cover"
            className="lg:hover:animate-pulse lg:hover:animate-infinite lg:hover:animate-duration-1000 lg:hover:animate-ease-linear lg:hover:animate-alternate object-cover h-full w-full"
          />
        </a>
      </div>

      <div className="absolute flex justify-center items-center w-full flex-wrap gap-2 p-4 bottom-0">
        {stack.map((item, index) => (
          <Chip key={index} background={getBackground(item)}>
            {item}
          </Chip>
        ))}
      </div>

      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-0 left-0"
      >
        <h1 className="flex items-center text-gray-800 font-bold text-lg bg-rose-300 hover:bg-rose-200 rounded-r-lg px-2 py-1">
          <BsGithub className="mr-2" />
          {title}
        </h1>
      </a>
    </div>
  );
}

export default Card;
