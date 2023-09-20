import { projects } from "../data";

export default function PastWork() {
  return (
    <div className="pastwork-container">
      <p className="pastwork-intro">
        I have pursued a self thought journey to acquire a comprehensive skill
        set in front end technologies and here are some small projects I
        prepared:
      </p>
      <hr />

      <Projects />
      <hr />
      <p className="pastwork-outro">
        As of Sep 2022, I had a chance to join a team of great folks and have
        worked as a front-end freelancer in collaboration with them. I am so
        curious about the development of the web technologies and I would like
        to contribute to it.
      </p>
    </div>
  );
}

function Projects() {
  return (
    <div className="projects-container">
      {projects.map((project) => (
        <div key={project.image} className="project-box">
          <h1>{project.title}</h1>
          <img src={project.image} alt={project.title} />
          <h2>{project.subtitle}</h2>
          <p>{project.description}</p>
          <a href="">View Project</a>
        </div>
      ))}
    </div>
  );
}
