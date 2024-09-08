import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex px-4 py-4 md:px-8 text-white   gap-16 w-full items-center">
      <div className="font-bold text-xl italic">Mahesh</div>
      <div className="md:block hidden ">
        <ul className="flex gap-6 ">
          <li className="hover:underline hover:underline-offset-4 ">
            <Link href={"#home"}>Home</Link>
          </li>
          <li className="hover:underline hover:underline-offset-4">
            <Link href={"#layoutGrid"}>Skills</Link>
          </li>
          <li className="hover:underline hover:underline-offset-4">
            <Link href={"/projects"}>projects</Link>
          </li>
          <li className="hover:underline hover:underline-offset-4">
            <Link href={"#layoutGrid"}>About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
