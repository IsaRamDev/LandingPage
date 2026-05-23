"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { PiCat } from "react-icons/pi";
import myData from "../constants/data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

function Navbar() {
  const router = useRouter();
  const [pathname, setPathname] = useState();

  useEffect(() => {
    setPathname(window.location.pathname);
  }, [router]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <div className="bg-white text-black px-4 py-4 min-h-[10vh] min-w-full">
      <div className="flex md:flex-row justify-around items-center">
        <div className="flex flex-col">
          <Link href="/">
            <h1 className="font-semibold text-xl hover:text-rose-400 transition-colors">
              {myData.name}
            </h1>
            <p className="text-base font-light text-gray-500 hover:text-rose-400 transition-colors">
              {myData.designation}
            </p>
          </Link>
        </div>

        <div className="space-x-8 px-6 hidden lg:flex font-semibold">
          {navLinks.map(({ href, label }) => (
            <Link href={href} key={href}>
              <div className="flex flex-row gap-x-2">
                {isActive(href) && <PiCat className="text-2xl text-rose-400" />}
                <span className={isActive(href) ? "text-rose-400 font-bold" : "hover:text-rose-400 transition-colors"}>
                  {label}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex gap-4 items-center">
          <Link href={myData.socialLinks.Github} target="_blank" className="hover:text-rose-400 transition-colors">
            <BsGithub className="text-2xl" />
          </Link>
          <Link href={myData.socialLinks.LinkedIn} target="_blank" className="hover:text-rose-400 transition-colors">
            <BsLinkedin className="text-2xl" />
          </Link>
          <Link href="/resume">
            <span className="text-base font-bold px-3 py-2 bg-rose-200 text-gray-800 rounded-xl hover:bg-rose-400 transition-colors">
              Resume
            </span>
          </Link>
        </div>
      </div>

      <div className="flex gap-x-4 justify-around items-center text-center lg:hidden mt-4 font-semibold">
        {navLinks.map(({ href, label }) => (
          <Link href={href} key={href}>
            <span className={isActive(href) ? "text-rose-400 font-bold" : "hover:text-rose-400 transition-colors"}>
              {label}
            </span>
          </Link>
        ))}
      </div>

      <div className="flex md:hidden w-full gap-4 justify-center py-5">
        <Link href={myData.socialLinks.Github} target="_blank" className="hover:text-rose-400 transition-colors">
          <BsGithub className="text-2xl" />
        </Link>
        <Link href={myData.socialLinks.LinkedIn} target="_blank" className="hover:text-rose-400 transition-colors">
          <BsLinkedin className="text-2xl" />
        </Link>
        <Link href="/resume">
          <span className="text-base font-bold px-3 py-2 bg-rose-200 text-gray-800 rounded-xl hover:bg-rose-400 transition-colors">
            Resume
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
