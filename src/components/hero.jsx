import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function heroSection() {
  return (
    <>
      <section className="herosec flex flex-col-reverse items-center md:justify-center md:flex-row md:gap-6 md:p-16">
        <div className=" text-center md:w-1/2">
          <h1 className="text-2xl font-bold md:text-6xl">Mahesh Jyothula</h1>
          <h4 className="font-bold text-lg md:text-2xl">
            I am <span className="dev  text-purple-500">Devloper .</span>
          </h4>
          <p className="px-4  md:mx-auto md:text-xl">
            Aiming to start my career with an organization where my skill set
            can be utilized for the growth of the organization.
          </p>
          <div className="hero-end flex justify-around  my-4 items-center">
            <div className="span-icon flex gap-4 text-xl ">
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
            <button className="resume bg-purple-500 text-white px-4 py-2 rounded-xl ">
              Resume
            </button>
          </div>
        </div>
        <div className="my-4">
          <img
            src="/21MH5A0437.jpg"
            alt="profile"
            className="rounded-[50%] h-40 md:h-80"
          />
        </div>
      </section>
    </>
  );
}

export default heroSection;
