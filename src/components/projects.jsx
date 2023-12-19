import ProjectCard from "./projectsCard";
export default function Projects() {
  return (
    <section className="p-8 ">
      <h1>PROJECTS</h1>
      <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-center">
        <ProjectCard
          title="Deployment Of Movie List Web Application"
          stack={["HTML", "CSS", "JavaScript", "MongoDB", "AWS", "Docker"]}
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
        />
        <ProjectCard
          title="Spotify Clone Webpage"
          stack={["HTML", "CSS", "JavaScript", "MongoDB", "React"]}
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
        />
      </div>
    </section>
  );
}
