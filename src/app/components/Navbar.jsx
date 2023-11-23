"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { PiCat } from "react-icons/pi";
import myData from "../constants/data";

function Navbar() {
  // obtener el pathname de la url cada vez que se cambia de página
  const router = useRouter();
  const [pathname, setPathname] = useState();

  useEffect(() => {
    setPathname(window.location.pathname);
  }, [router]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-white text-black px-4 py-4 min-h-[10vh] min-w-full">
      <div className="flex md:flex-row justify-around items-center">
        <div className="flex flex-col">
          <Link href="/">
            <h1 className="font-semibold text-xl hover:text-rose-200 dark:hover:text-rose-200">
              {myData.name}
            </h1>
            <p className="text-base font-light text-gray-500 hover:text-rose-200 dark:hover:text-rose-200">
              {myData.designation}
            </p>
          </Link>
        </div>

        <div className="space-x-8 px-6 hidden lg:flex font-semibold">
          <Link href="/">
            <div className="flex flex-row gap-x-2">
              {pathname === "/" && <PiCat className="text-2xl text-rose-300" />}
              <span
                className={
                  pathname === "/"
                    ? `text-rose-300 font-bold`
                    : `lg:hover:text-rose-200`
                }
              >
                Home
              </span>
            </div>
          </Link>
          <Link href="/about">
            <div className="flex flex-row gap-x-2">
              {pathname === "/about" && (
                <PiCat className="text-2xl text-rose-300" />
              )}
              <span
                className={
                  pathname === "/about"
                    ? `text-rose-300 font-bold`
                    : `lg:hover:text-rose-200`
                }
              >
                About
              </span>
            </div>
          </Link>
          <Link href="/projects">
            <div className="flex flex-row gap-x-2">
              {pathname === "/projects" && (
                <PiCat className="text-2xl text-rose-300" />
              )}
              <span
                className={
                  pathname === "/projects"
                    ? `text-rose-300 font-bold`
                    : `lg:hover:text-rose-200`
                }
              >
                Projects
              </span>
            </div>
          </Link>
          <Link href="/experience">
            <div className="flex flex-row gap-x-2">
              {pathname === "/experience" && (
                <PiCat className="text-2xl text-rose-300" />
              )}
              <span
                className={
                  pathname === "/experience"
                    ? `text-rose-300 font-bold`
                    : `lg:hover:text-rose-200`
                }
              >
                Experience
              </span>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex gap-4 ">
          <Link
            href={myData.socialLinks.Github}
            target="_blank"
            className="text-base font-bold hover:text-rose-300"
          >
            <BsGithub className="text-2xl" />
          </Link>
          <Link
            href={myData.socialLinks.LinkedIn}
            target="_blank"
            className="text-base font-bold hover:text-rose-300"
          >
            <BsLinkedin className="text-2xl" />
          </Link>
          <Link
            href="/resume"
          >
            <span className="text-base font-bold p-1.5 md:p-3 bg-rose-300 rounded-xl hover:bg-rose-200 ">
              {"Resume "}
            </span>
          </Link>
        </div>
      </div>
      <div className="flex gap-x-4 justify-around items-center text-center lg:hidden mt-4 font-semibold">
        <Link href="/">
          <span
            className={
              pathname === "/"
                ? ` text-rose-300  font-bold`
                : `lg:hover:text-rose-200`
            }
          >
            {"Home"}
          </span>
        </Link>
        <Link href="/about">
          <span
            className={
              pathname === "/about"
                ? ` text-rose-300  font-bold`
                : `lg:hover:text-rose-200`
            }
          >
            {"About"}
          </span>
        </Link>
        <Link href="/projects">
          <span
            className={
              pathname === "/projects"
                ? ` text-rose-300  font-bold`
                : `lg:hover:text-rose-200`
            }
          >
            {"Projects"}
          </span>
        </Link>
        <Link href="/experience">
          <span
            className={
              pathname === "/experience"
                ? ` text-rose-300  font-bold`
                : `lg:hover:text-rose-200`
            }
          >
            {"Experience"}
          </span>
        </Link>
      </div>

      <div className="flex md:hidden w-full gap-4 justify-center py-5">
        <Link
          href={myData.socialLinks.Github}
          target="_blank"
          className="block text-base font-bold hover:text-rose-300"
        >
          <BsGithub className="text-2xl" />
        </Link>
        <Link
          href={myData.socialLinks.LinkedIn}
          target="_blank"
          className="text-base font-bold hover:text-rose-300"
        >
          <BsLinkedin className="text-2xl" />
        </Link>
        <Link
          href="/resume"
        >
          <span className="text-base font-bold p-3 md:p-3 bg-rose-300 rounded-xl hover:bg-rose-900 ">
            {"Resume "}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
