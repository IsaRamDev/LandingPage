import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import myData from "../constants/data";

function Footer() {
  const currentTime = new Date();
  const year = currentTime.getFullYear();
  return (
    <div className="bg-white mt-auto">
      <div className="max-w-6xl  mx-auto px-4 py-3 md:py-6">
        <div className="h-0.5 w-full bg-rose-400"></div>
        <div className="flex flex-col text-black space-y-4 md:space-y-0 md:flex-row justify-around items-center mt-8 font-bold">
          <div>
            <span>{year} &copy; Isabel Ramirez. All Rights Reserved.</span>
          </div>
          <div>
            <span>
              Developed by
              <div className="inline-block transform hover:scale-110 hover:-rotate-3 transition duration-300">
                <Link
                  className="hover:bg-rose-300 rounded-md px-2 py-1  hover:text-gray-50"
                  href="https://isaramdev.com"
                >
                  Isabel Ramirez
                </Link>
              </div>
            </span>
          </div>
          <div className="space-x-4 flex flex-row items-center">
            <Link
              href={myData.socialLinks.Github}
              className="text-base font-normal hover:text-rose-300"
              target="_blank"
            >
              <BsGithub className="inline-block text-xl hover:text-rose-300" />
            </Link>
            <Link
              href={myData.socialLinks.LinkedIn}
              className="text-base font-normal hover:text-rose-300"
              target="_blank"
            >
              <BsLinkedin className="inline-block text-xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
