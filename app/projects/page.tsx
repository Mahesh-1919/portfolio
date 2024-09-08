import React from "react";
import ProjectCard from "../components/projectaCard";

const page = () => {
  const projectsData = [
    {
      projectName: "Explore",
      projectDescription: "Blogging website",
      projectImage: "/images/explore.png",
      projectUrl: "https://explore.smdev.me",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
        " Node.js",
        "Postgres",
        "Prisma",
      ],
      githubUrl: "https://github.com/Mahesh-1919/explore.git",
    },

    {
      projectName: "Admin Dashboard",
      projectDescription: "This is a project description",
      projectImage: "/images/dashboard.png",
      projectUrl: "https://accuknox-task-eight.vercel.app/",
      techStack: ["React", "TailwindCSS", "TypeScript", "Next.js"],
      githubUrl: "https://github.com/Mahesh-1919/Accuknox-Task.git",
    },

    {
      projectName: "Immortal Fitness",
      projectDescription: "",
      projectImage: "/images/immortal.png",
      projectUrl: "https://idyllic-moonbeam-c99d52.netlify.app/",
      techStack: ["React", "javaScript", "TailwindCSS"],
      githubUrl: "https://github.com/Mahesh-1919/Accuknox-Task.git",
    },
    {
      projectName: "Landing Page",
      projectDescription: "This is a project description",
      projectImage: "/images/elearn.png",
      projectUrl: "https://earnwave.vercel.app/ ",
      techStack: ["React", "javaScript", "kubernetes", "Docker"],
      githubUrl: "https://github.com/Mahesh-1919/Accuknox-Task.git",
    },
    {
      projectName: "Task Manager",
      projectDescription: "task managament application",
      projectImage: "/images/taskmanager.png",

      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
        " Node.js",
        "MongoDb",
        "Prisma",
        "Schadcn-Ui",
      ],
      githubUrl: "https://github.com/Mahesh-1919/taskManager.git",
    },
    {
      projectName: " Movie List Web Application",
      projectDescription: "This is a project description",
      projectImage: "/images/movie-list.png",
      projectUrl: "",
      techStack: ["React", "javaScript", "MongoDb", "Express.js", "Node.js"],
      githubUrl: "https://github.com/Mahesh-1919/devops_project.git",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-2 md:p-8 gap-8 container mx-auto">
      {projectsData.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </div>
  );
};

export default page;
