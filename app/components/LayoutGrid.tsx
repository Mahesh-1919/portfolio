"use client";
import React from "react";
import { LayoutGrid } from "./ui/layout-grid";
import Link from "next/link";
import { Button } from "./ui/moving-border";
export default function LayoutGridDemo() {
  return (
    <div className="  md:max-w-5xl mx-auto ">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-2xl text-xl text-white  text-center font-mono">
        About me
      </p>
      <p className="  text-zinc-400 font-thin text-center font-mono text-xs md:text-sm ">
        {" "}
        I'm Sai Siva Mahesh Jyothula, a passionate full-stack developer with
        expertise in React.js, Next.js, Tailwind CSS, and TypeScript. I enjoy
        building scalable web applications and have experience in both front-end
        and back-end development, With a strong foundation in FullStack
        Developement, I'm always looking for new challenges to expand my skill
        set.
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200"></p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-2xl text-xl text-white font-mono text-center flex items-center justify-center">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 640 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-2 text-blue-500"
        >
          <path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path>
        </svg>
        My works
      </p>
      <p className="font-normal text-base text-white"></p>
      <div className="flex justify-center flex-col items-center">
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200 text-center">
          Explore some of my recent projects
        </p>
        <div>
          <Button
            borderRadius="1.75rem"
            className="bg-slate-900 text-white border-slate-800 hover:bg-slate-800"
          >
            <Link href="/projects">Projects</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div className=" flex flex-col items-center">
      <p className="font-bold md:text-2xl text-xl text-white font-mono text-center flex gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 text-blue-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
          />
        </svg>
        Resume
      </p>
      <p className="font-normal text-base text-white"> </p>

      <p className="font-normal text-base my-4 max-w-lg text-zinc-400 text-center">
        You can Check my Resume here
      </p>
      <div className="relative inline-flex  group mb-2 md:mb-0">
        <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        <Link
          href="https://drive.google.com/file/d/1yekKdL7HcTOL4MKmG89CGi-FUqJwlo8t/view"
          className="relative inline-flex items-center justify-center px-4 py-2  text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
        >
          Resume
        </Link>
      </div>
    </div>
  );
};
const SkeletonFour = () => {
  const skillsData = [
    "Html",
    "Css",
    "React.js",
    "Next.js",

    "JavaScript",
    "Node.js",
    "Tailwind CSS",
    "TypeScript",
    "mongodb",
    "Git",
    "Docker",
    "Python",
    "AWS",
  ];
  return (
    <div className="">
      <p className="font-bold md:text-2xl text-xl text-white font-mono text-center flex items-center justify-center pt-2">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 640 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-2 text-blue-500"
        >
          <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path>
        </svg>
        Skills
      </p>
      <ul className="flex gap-4  flex-wrap justify-center py-4 ">
        {skillsData.map((skill, i) => (
          <li
            key={i}
            className="text-white  text-xs md:text-sm bg-slate-800 py-2 px-4 rounded-full border border-zinc-800 "
          >
            {skill}
          </li>
        ))}{" "}
        md:text-sm
      </ul>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
  },
];
