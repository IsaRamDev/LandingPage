import { RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "../components/RainbowHighlight";
import myData from "../constants/data";
import Image from "next/image";

export default function Hero() {
  const colors = ["#D6ECB9", "#FFC196", "#A3E1E9", "#C4BEF1"];
  return (
    <div className="flex flex-col md:flex-row justify-around items-center w-full">
      {/* Text container */}
      <div className="flex flex-col gap-y-4">
        <RoughNotationGroup show={true}>
          {["Web Developer", "Front-End", "Innovation", "CatLover"].map(
            (text, idx) => (
              <RainbowHighlight key={idx} color={colors[idx]}>
                <h1 className="font-roboto text-4xl mx-4 md:text-6xl xl:text-7xl font-bold text-gray-700">
                  {text}
                </h1>
              </RainbowHighlight>
            )
          )}
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div>
        <div className="relative w-3/4 mx-auto py-5 md:py-0">
          <Image
            src={myData.avatarUrl}
            alt="avatar"
            width={300}
            height={300}
            className="shadow rounded"
          />
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
              </svg>
              <p className="font-mono">That&#39;s me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
