import React from "react";
import ProjectaCard from "./projectaCard";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
type Props = {};

const Projects = (props: Props) => {
  const projectsData = [
    {
      title: "Explore",
      icon: (
        <img
          src="/images/explore.png"
          alt="explore"
          className="rounded-2xl h-[8rem] w-[15rem] "
        />
      ),
    },
    {
      title: "Task Manager",
      icon: (
        <img
          src="/images/taskmanager.png"
          alt="taskmanager"
          className="rounded-2xl h-[8rem] w-[15rem] "
        />
      ),
    },
    {
      title: "Admin Dashboard",

      icon: (
        <img
          src="/images/dashboard.png"
          alt="dashboard"
          className="rounded-2xl h-[8rem] w-[15rem] "
        />
      ),
    },
    {
      title: " Movie List Web Application",

      icon: (
        <img
          src="/images/movie-list.png"
          alt="movie-list"
          className="rounded-2xl h-[8rem] w-[15rem] "
        />
      ),
    },
    {
      title: "Immortal Fitness",

      icon: (
        <img
          src="/images/immortal.png"
          alt="immortal"
          className="rounded-2xl h-[8rem] w-[15rem] "
        />
      ),
    },
    {
      title: "Application and Database Orchestration using Kubernetes",
      icon: (
        <img
          src="/images/kuberneties.png"
          alt="kuberneties"
          className="rounded-2xl h-[8rem] w-[15rem] "
        />
      ),
    },
    {
      title: "Landing Page",
      icon: (
        <img
          src="/images/elearn.png"
          alt="kuberneties"
          className="rounded-2xl h-[8rem] w-[15rem] "
        />
      ),
    },
  ];
  return (
    <div className="text-white md:p-8 p-2 w-full ">
      <div className="">
        <InfiniteMovingCards
          items={projectsData}
          direction="right"
          speed="slow"
          className="opacity-90"
        />
        <InfiniteMovingCards
          items={projectsData}
          direction="left"
          speed="slow"
          className=" opacity-90"
        />
      </div>
    </div>
  );
};

export default Projects;
