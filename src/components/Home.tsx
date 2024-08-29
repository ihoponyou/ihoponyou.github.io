import PROJECTS from "../projects";
import ProjectCard from "./ProjectCard";

function Home() {
  return (
    <div className="row row-cols-2 row-cols-md-4 g-4">
      {Array.from(Object.keys(PROJECTS)).map(
        (title) => <ProjectCard
          key={title}
          title={title}
          linkTo={title.trim().replaceAll(/\s+/g, "-")}
        />
      )}
    </div>
  )
}

export default Home;
