import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-scroll";

export default function Navbar() {
  let [open, setOpen] = useState(false);
  function clickhandle(event) {
    setOpen(!open);
    event.preventDefault();
  }
  return (
    <>
      <div className="navbar flex justify-end md:justify-center p-4 text-xl  md:fixed md:top-0 md:w-full z-10 ">
        <div
          className={`bg-black rounded-xl  absolute right-8 top-10 md:sticky p-4 px-8  md:p-0  ${
            open ? "block" : "hidden"
          } md:block`}
        >
          <ul className=" list-none md:flex-row  flex flex-col gap-4 md:gap-12 text-xs items-center md:text-xl md:bg-slate-400/10 md:p-4 md:rounded-2xl ">
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-150}
                activeClass="active"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="skills" spy={true} smooth={true} offset={-150}>
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link to="projects" spy={true} smooth={true} offset={-150}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="education" spy={true} smooth={true} offset={-150}>
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" spy={true} smooth={true} offset={-400}>
                Contact
              </Link>
            </li>
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
