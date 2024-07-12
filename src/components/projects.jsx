import ProjectCard from "./projectsCard";
export default function Projects() {
  return (
    <section className="p-8 " id="projects">
      <h1 className="sec-head">PROJECTS</h1>
      <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-center">
        <ProjectCard
          title="Deployment Of Movie List Web Application"
          stack={["HTML", "CSS", "JavaScript", "MongoDB", "AWS", "Docker"]}
          git="https://github.com/Mahesh-1919/devops_project.git"
          url="./movielisting.png"
        />

        <ProjectCard
          title="Task Manager Web Application"
          stack={[
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "React",
            "Nextjs",
            "Prisma",
            "Tailwind",
            "Shadcn Ui",
            "Next Auth",
          ]}
          git="https://github.com/Mahesh-1919/taskmanager_webapp.git"
          url="https://static.collectui.com/shots/2491838/tasks-large"
        />
        <ProjectCard
          title="Application and Database Orchestration using Kubernetes"
          stack={[
            "HTML",
            "CSS",
            "JavaScript",
            "Kubernetes",
            "AWS",
            "Docker",
            "Prometheus",
            "Grafana",
          ]}
          git="https://github.com/Mahesh-1919/devops_project.git"
          url="https://spaceliftio.wpcomstaging.com/wp-content/uploads/2022/05/73.kubernetes-best-practices.png"
        />
        <ProjectCard
          title="Movie Review Web-Application"
          stack={[
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Expressjs",
            "Tailwind",
          ]}
          git="https://github.com/Mahesh-1919/devops_project.git"
          url="/WEBSITE-COVER.jpg"
        />
      </div>
    </section>
  );
}
