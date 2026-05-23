import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import myData from "../constants/data";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-3 md:py-6">
        <div className="h-0.5 w-full bg-rose-400"></div>
        <div className="flex flex-col text-black space-y-4 md:space-y-0 md:flex-row justify-around items-center mt-8 font-bold">
          <span>{year} &copy; Isabel Ramirez. All Rights Reserved.</span>
          <span>
            Developed by
            <div className="inline-block transform hover:scale-110 hover:-rotate-3 transition duration-300">
              <Link
                className="hover:bg-rose-400 hover:text-white rounded-md px-2 py-1 transition-colors"
                href="https://isaramdev.com"
              >
                Isabel Ramirez
              </Link>
            </div>
          </span>
          <div className="space-x-4 flex flex-row items-center">
            <Link href={myData.socialLinks.Github} target="_blank" className="hover:text-rose-400 transition-colors">
              <BsGithub className="text-xl" />
            </Link>
            <Link href={myData.socialLinks.LinkedIn} target="_blank" className="hover:text-rose-400 transition-colors">
              <BsLinkedin className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
