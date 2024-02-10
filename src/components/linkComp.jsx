import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const LinkComp = () => {
  return (
    <div className="span-icon flex gap-4 text-xl md:text-2xl ">
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
        <a href="maheshjyothula23@gmail.com">
          <FaEnvelope />
        </a>
      </span>
      <span className="icon">
        <a href="https://github.com/Mahesh-1919">
          <FaGithub />
        </a>
      </span>
    </div>
  );
};

export default LinkComp;
