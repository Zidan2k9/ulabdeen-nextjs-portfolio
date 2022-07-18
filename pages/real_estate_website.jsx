import Link from "next/link";
import Image from "next/image";
import React from "react";
import real_estate from "../public/assets/projects/real_estate.png";
import { RiRadioButtonFill } from "react-icons/ri";

const real_estate_website = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={real_estate}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 dark:text-green-600">BT Real Estate</h2>
          <h3 className="dark:text-green-700">Python, Django, PostgreSQL</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-xl">Full Stack Web Application </p>
          <p>
            This is a website for the fictional real estate company BT Real
            Estate. The primary goal of this project was to improve my skills
            with Python, to gain a better understanding of backend web
            development and to treat this website as a real world project given
            to me by a client with a set of requirements. The website use&apos;s
            Python&apos;s Django framework combined with PostgreSQL to allow
            users to admin the content of the website. Admin users can add,
            delete and edit details of property listings and the realtors
            associated with the listings. Property enquiries can also be viewed.
          </p>

          <p>Features:</p>

          <ul className="list-disc">
            <li>
              Website visiors can view, search and inquire for a property.
              Registered users have their inquired properties saved in the
              database (which they can view on their dashboard) and cannot
              inquire for a property more than once. Once a user inquires about
              a property, the company and the realtor associated with the
              property are informed via email.
            </li>
            <li>
              The website structure is a combination of Django apps along with
              their associated database table models. Requirements such as
              registered user accounts, inquires, property listings, realtor
              information and web pages have their own individual app. The table
              models are created by Django and then migrated to PostgreSQL.
            </li>
            <li>
              The website structure is a combination of Django apps along with
              their associated database table models. Requirements such as
              registered user accounts, inquires, property listings, realtor
              information and web pages have their own individual app. The table
              models are created by Django and then migrated to PostgreSQL.
            </li>
            <li>
              The project&apos;s development environment was enclosed in a
              &apos;virtual environment&apos; to isolate project files and
              library dependencies ensuring there would be no clashes with the
              libraries contained on the local machine. All requirements were
              tested locally including a local instance of the database before
              deploying the website on a Digital Ocean Linux Ubuntu droplet. The
              droplet was protected by SSH authentication and was accessed using
              PuTTy.
            </li>
            <li>
              To replicate the development environment on Ubuntu a number of
              tasks were performed. These included creating a new user and
              giving them root priviliges, enabling the firewall, installing a
              number of software packages (Python, Postgres and NGinx). A
              PostgreSQL database was created and the project&apos;s code was
              cloned from the repository. Migrations were performed to create
              tables based on the table models of each app in the project.
            </li>
            <li>
              Gunicorn was used in combination with NGinx to replace
              Django&apos;s local deployment functionality and instead deploy
              the website globally. The website can be accessed using the IP
              address of the Linux droplet. This website is solely part of my
              portfolio and for this reason I have not assigned a domain for it.
            </li>
          </ul>

          <a href="http://bit.ly/2Sy5JkA">
            <button className="px-8 py-2 mt-4 mr-8 text-green-100">
              Live Demo
            </button>
          </a>
          <a href="https://github.com/Zidan2k9/DjangoProject">
            <button className="px-8 py-2 mt-4 mr-8 text-green-100">
              GitHub repository
            </button>
          </a>
          <a href="https://www.youtube.com/watch?v=QbR-fn5TObQ">
            <button className="px-8 py-2 mt-4 mr-8 text-green-100">
              Video Demo
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-green-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 dark:text-green-400">
              Stack
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                HTML
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                CSS
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                Python
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                Django
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                Bootstrap
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                PostgreSQL
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                Gunicorn
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                NGinx
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                DigitalOcean
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                Git
              </p>
            </div>
          </div>
        </div>
        <Link href="/#work">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default real_estate_website;
