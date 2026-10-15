import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
function ProjectsPage() {
  return (
    <main>
      {/* Header */}
      <h1 className="sketchy-border relative font-semibold font-stretch-expanded w-5/6 mx-auto text-white py-10 mt-3 bg-black text-6xl">
        Projects
      </h1>
      {/* Main Content */}
      <ul className="sketchy-border w-5/6 gap-10 p-10 flex flex-col text-ink mx-auto mt-10 bg-black">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ProjectsPage;
