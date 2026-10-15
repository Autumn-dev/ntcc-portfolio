import type { Project } from "../data/projects";
type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="grid grid-cols-[2fr_3fr] grid-rows-[auto_1fr] text-left gap-x-10">
      <img
        src={project.imageUrl}
        alt={project.imageAlt}
        className="object-cover w-full aspect-3/2 col-start-1 row-span-2"
      />
      <h2 className="col-start-2 row-start-1">{project.title}</h2>
      <p className="col-start-2 row-start-2">{project.description}</p>
    </article>
  );
}
export default ProjectCard;
