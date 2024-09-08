import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-gray-500 p-8 flex justify-between flex-col md:flex-row-reverse w-full md:items-center gap-4 ">
      <div className="flex justify-between gap-4 md:px-10 w-72">
        <div>
          <p className="text-gray-400">Sections</p>
          <ul>
            <li className="hover:underline hover:underline-offset-4 hover:text-white">
              <Link href={"#home"}>Home</Link>
            </li>
            <li className="hover:underline hover:underline-offset-4 hover:text-white">
              <Link href={"#layoutGrid"}>Skills</Link>
            </li>
            <li className="hover:underline hover:underline-offset-4 hover:text-white">
              <Link href={"/projects"}>projects</Link>
            </li>
            <li className="hover:underline hover:underline-offset-4 hover:text-white">
              <Link href={"#layoutGrid"}>About</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-gray-400">Socials</p>
          <ul>
            <li className="hover:underline hover:underline-offset-4 hover:text-white">
              <Link href={"https://x.com/saijyothula02"}>Twitter </Link>
            </li>
            <li className="hover:underline hover:underline-offset-4 hover:text-white">
              <Link
                href={"https://www.linkedin.com/in/mahesh-jyothula-751138236/"}
              >
                Linkedin
              </Link>
            </li>
            <li className="hover:underline hover:underline-offset-4 hover:text-white">
              <Link href={"https://github.com/Mahesh-1919"}>Github</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className=" text-sm">
        <p className="text-white/80 font-medium font-serif">Mahesh</p>
        <p>© portfolio.smdev.me - All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
