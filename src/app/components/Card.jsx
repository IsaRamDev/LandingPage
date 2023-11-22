import Image from "next/image";
import Chip from "../components/Chip";
import { getBackground } from "../components/Badge";
import { BsGithub } from "react-icons/bs";

function Card({ title, github, imgUrl, link, stack }) {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <div className="object-cover">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block shadow-2xl"
        >
          <Image
            src={imgUrl}
            alt={`${title} portfolio`}
            className="lg:hover:animate-pulse lg:hover:animate-infinite lg:hover:animate-duration-1000 lg:hover:animate-ease-linear lg:hover:animate-alternate object-cover h-full w-full"
            width={1280}
            height={720}
            layout="responsive"
          />
        </a>
      </div>

      <div className="absolute flex justify-center items-center w-full flex-wrap gap-2 bottom-5 z-10">
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
        className="w-full block shadow-2xl"
      >
        <h1 className="absolute flex items-center top-5 right-2 text-gray-50 font-bold text-xl bg-green-600 hover:bg-green-800 rounded-lg px-2">
          <BsGithub className="inline-block mx-2" />
          {title}
        </h1>
      </a>
    </div>
  );
}

export default Card;
