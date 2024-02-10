import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";
export default function ProjectCard(props) {
  let stack = props.stack;
  return (
    <div className="max-w-sm  border rounded-lg shadow-lg shadow-black/40 bg-gray-800 border-gray-700 m-5 project-card">
      <img className="rounded-t-lg md:h-60" src={props.url} alt="image" />

      <div className="p-5 ">
        <h5 className="mb-2 text-xl md:text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
          {props.title}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 hidden md:block">
          {stack.map((Element, index) => (
            <li key={index} className="list-none inline-block px-2 -z-2">
              {Element}
            </li>
          ))}
        </p>
        <a
          href={props.git}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string,
  stack: PropTypes.array,
  git: PropTypes.string,
  url: PropTypes.string,
};
