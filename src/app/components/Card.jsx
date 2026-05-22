import Image from "next/image";
import Chip from "../components/Chip";
import { getBackground } from "../components/Badge";
import { BsGithub } from "react-icons/bs";
import { HiExternalLink } from "react-icons/hi";

function Card({ title, github, imgUrl, link, stack, description }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-rose-300 flex flex-col">
      <div className="w-full h-52 relative overflow-hidden">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Image
            src={imgUrl}
            alt={`${title} portfolio`}
            width={1280}
            height={720}
            className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <p className="text-white text-sm leading-relaxed">{description}</p>
          </div>
        </a>
      </div>

      <div className="p-4 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <a href={link} target="_blank" rel="noopener noreferrer" className="group/title flex items-center gap-1">
            <h3 className="font-bold text-gray-900 text-base group-hover/title:text-rose-500 transition-colors leading-snug">
              {title}
            </h3>
            <HiExternalLink className="text-gray-400 group-hover/title:text-rose-400 transition-colors flex-shrink-0 mt-0.5" />
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-rose-400 transition-colors flex-shrink-0"
            title="View on GitHub"
          >
            <BsGithub className="text-xl" />
          </a>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed md:hidden">{description}</p>

        <div className="flex flex-wrap gap-2 mt-auto pt-1">
          {stack.map((item, index) => (
            <Chip key={index} background={getBackground(item)}>
              {item}
            </Chip>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
