import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import {
  FaGithub,
  FaLinkedinIn,
  FaHackerrank,
  FaStackOverflow,
} from "react-icons/fa";
import {
  BsFillPersonLinesFill,
  BsFillFileEarmarkPdfFill,
} from "react-icons/bs";
import { TbLetterZ, TbLetterU } from "react-icons/tb";
import { useRouter } from "next/router";
import { SiDevdotto } from "react-icons/si";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/contacts_keeper_app" ||
      router.asPath === "/real_estate_website" ||
      router.asPath === "/smart_brain_website" ||
      router.asPath === "/work_experience" ||
      router.asPath === "/masters_project" ||
      router.asPath === "/fourth_year_project" ||
      router.asPath === "/third_year_project"
    ) {
      setNavBg("transparent");
      setLinkColor("#12844D");
    } else {
      setNavBg("#12844D");
      setLinkColor("#E6FBF1");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/#home">
          {/* <Image src="/../public/assets/navLogo.png" alt="Portfolio Logo written in green with a white background, Zain Ul-Abdeen" width='125' height='50' /> */}
          <div className="tracking-tighter cursor-pointer">
            <TbLetterZ color="white" size={25} />
            <TbLetterU color="white" size={25} />
          </div>
          {/* MAIN NAV */}
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/#home">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#work">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
            <div>{renderThemeChanger()}</div>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 dark:bg-black"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          {/* MOBILE RESPONSIVE DIV */}
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="#home">
                {/* <Image src='/../public/assets/navLogo.png' width='87' height='35' alt='Portfolio Logo written in green with a white background, Zain Ul-Abdeen, Mobile Nav Menu' /> */}
                <div className="tracking-tighter">
                  <TbLetterZ color="green" size={25} />
                  <TbLetterU color="green" size={25} />
                </div>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer dark:shadow-green-400 dark:bg-black"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4 dark:border-green-300">
              <p className="w-[85%] md:w-[90%] py-4">
                Creating solutions and learning along the way!
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="#work">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
              <div>{renderThemeChanger()}</div>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-green-400 dark:text-white">
                Get To Know Me!
              </p>
              <div className="border-b border-gray-300 my-4 dark:border-green-300"></div>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80]">
                {/* LinkedIn  */}
                <a href="https://www.linkedin.com/in/zainulabdeen1/">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-150 ease-in duration-300 dark:shadow-green-400 dark:bg-black">
                    <FaLinkedinIn />
                  </div>
                </a>
                {/* GitHub  */}
                <a href="https://www.github.com/Zidan2k9">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-150 ease-in duration-300 dark:shadow-green-400 dark:bg-black">
                    <FaGithub />
                  </div>
                </a>
                {/* StackOverFlow  */}
                <a href="https://stackoverflow.com/users/2850499/zain-ul-abdeen">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-150 ease-in duration-300 dark:shadow-green-400 dark:bg-black">
                    <FaStackOverflow />
                  </div>
                </a>
                {/* Dev.to  */}
                <a href="https://www.dev.to/zainulabdeen">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-150 ease-in duration-300 dark:shadow-green-400 dark:bg-black">
                    <SiDevdotto />
                  </div>
                </a>
                {/* HackerRank  */}
                <a href="https://www.hackerrank.com/ulabdeen">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-150 ease-in duration-300 dark:shadow-green-400 dark:bg-black">
                    <FaHackerrank />
                  </div>
                </a>
                {/* Mail */}
                <a href="mailto:ieulabdeen.zain@gmail.com">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-150 ease-in duration-300 dark:shadow-green-400 dark:bg-black">
                    <AiOutlineMail />
                  </div>
                </a>
                {/* CV PDF download */}
                <a href="https://drive.google.com/file/d/1tGK-xuVFI8aklsSIclIBruHjTYMTa9i6/view?usp=sharing">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-150 ease-in duration-300 dark:shadow-green-400 dark:bg-black">
                    <BsFillFileEarmarkPdfFill />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
