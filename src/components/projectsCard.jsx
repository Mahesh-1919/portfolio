import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";
export default function ProjectCard(props) {
  let stack = props.stack;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg shadow-black/40 dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="/public/WEBSITE-COVER.jpg"
          alt="image"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {stack.map((Element, index) => (
            <li key={index} className="list-none inline-block px-2">
              {Element}
            </li>
          ))}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
};
