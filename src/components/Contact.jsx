import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
export default function Conatct() {
  return (
    <section id="contact" className="p-4 bg-black text-white">
      <h1>Contact</h1>
      <form className="text-right">
        <div className="flex flex-col  gap-2  mb-4">
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="bg-gray-400/20 p-2 rounded-lg"
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="bg-gray-400/20 p-2 rounded-lg"
          />
          <textarea
            id="review"
            name="review"
            rows="4"
            cols="50"
            placeholder="Content"
            className="bg-gray-400/20 p-2 rounded-lg"
          ></textarea>
        </div>
        <div className="flex justify-between  items-center text-white/50">
          <div className="span-icon flex gap-4 ml-4  ">
            <span className="icon ">
              <IoLogoLinkedin />
            </span>
            <span className="icon">
              <FaInstagram />
            </span>
            <span className="icon">
              <FaEnvelope />
            </span>
            <span className="icon">
              <FaGithub />
            </span>
          </div>

          <button
            type="button"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-purple-500 rounded-lg hover:bg-purple-800  "
          >
            Send
            <span className="inline-flex items-center justify-center ms-2 text-xs font-semibold  ">
              <IoSend />
            </span>
          </button>
        </div>
      </form>
    </section>
  );
}
