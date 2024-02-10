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
          url="./public/movielisting.png"
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
          title="Spotify Clone Webpage"
          stack={["HTML", "CSS", "JavaScript", "MongoDB", "React"]}
          git="https://github.com/Mahesh-1919/Spotify-clone.git"
          url="https://assets-global.website-files.com/64830736e7f43d491d70ef30/64bfca46b1569eeda774403d_64a57f4512ee9430c0ea7cf8_64a2cf43ee15ed8228d585a0_Business_Model_Examples-Spotify.webp"
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
