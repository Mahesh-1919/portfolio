import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import * as emailjs from "emailjs-com";
import { useState } from "react";

export default function Conatct() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  emailjs.init("2hUV1GLHX6hixJRJS");
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send("service_l0f690e", "template_zzahj9c", {
        name: name,
        email: email,
        review: review,
      })
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setName("");
    setEmail("");
    setReview("");
  };
  return (
    <section id="contact" className="p-4 bg-black text-white mb-10">
      <h1 className="sec-head">CONTACT</h1>
      <form className="text-right md:w-1/2 mx-auto" onSubmit={sendEmail}>
        <div className="flex flex-col  gap-2  mb-4">
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="bg-gray-400/20 p-2 md:p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="bg-gray-400/20 p-2 md:p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            id="review"
            name="review"
            rows="4"
            cols="50"
            placeholder="Content"
            className="bg-gray-400/20 p-2 md:p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-between  items-center text-white/50">
          <div className="span-icon flex gap-4 ml-4 md:text-2xl">
            <span className="icon ">
              <a href="https://www.linkedin.com/in/mahesh-jyothula-751138236/">
                <IoLogoLinkedin />
              </a>
            </span>
            <span className="icon">
              <a href="">
                <FaInstagram />
              </a>
            </span>
            <span className="icon">
              <a href="mailto:maheshjyothula23@gmail.com?subject=Mail from our Website">
                <FaEnvelope />
              </a>
            </span>
            <span className="icon">
              <a href="https://github.com/Mahesh-1919">
                <FaGithub />
              </a>
            </span>
          </div>

          <button className="flex items-center bg-purple-600 text-white gap-1 px-4 py-2 cursor-pointer  font-semibold tracking-widest rounded-md hover:bg-purple-400 duration-300 hover:gap-2 hover:translate-x-3">
            Send
            <svg
              className="w-5 h-5"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                strokeLinecap="round"
              ></path>
            </svg>
          </button>
        </div>
      </form>
    </section>
  );
}
