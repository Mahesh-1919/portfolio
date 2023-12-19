import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-scroll";

export default function navbar() {
  let [open, setOpen] = useState(false);
  function clickhandle(event) {
    setOpen(!open);
    event.preventDefault();
  }
  return (
    <>
      <div className="navbar flex justify-between  p-4 text-xl">
        <div className={`font-bold text-purple-500 `}>MAHESH</div>
        <div
          className={`bg-white rounded-xl  absolute right-8 top-10 md:sticky p-4 px-8  md:p-0  ${
            open ? "block" : "hidden"
          } md:block`}
        >
          <ul className=" list-none md:flex-row  flex flex-col gap-4 md:gap-8 text-xs items-center ">
            <li>Home</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Education</li>
            <li>Contact</li>
          </ul>
        </div>
        <button className="md:hidden" onClick={clickhandle}>
          {open ? <IoClose /> : <IoMenu />}
        </button>
        {/* 
        <div
          className={`${
            open ? "block" : "hidden"
          } absolute w-full text-center bg-white md:block`}
        > */}
      </div>
      {/* </div> */}
    </>
  );
}
