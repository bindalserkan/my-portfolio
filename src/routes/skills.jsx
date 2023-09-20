import { skills } from "../data";

export default function Skills() {
  return (
    <div className="skills-container">
      <p>
        Here is an overview of my skill set, encompassing both soft and
        technical skills. My natural inclination towards continuous learning
        drives me to gradually expand the technologies and the tools I have been
        using so far.
      </p>
      <div className="skills-boxes">
        <div>
          <h1>Behavioral Skills</h1>
          {skills.behavioralSkills.map((behavioralSkill) => (
            <div key={behavioralSkill} className="behavioral-box">
              <img src="./assets/badge-check-icon.svg" alt="checked" />
              <div>{behavioralSkill}</div>
            </div>
          ))}
        </div>
        <div>
          <h1>Technical Skills</h1>
          {skills.technicalSkills.map((technicalSkill) => (
            <div key={technicalSkill} className="technical-box">
              <img src="./assets/badge-check-icon.svg" alt="checked" />
              <div>{technicalSkill}</div>
            </div>
          ))}
        </div>
        <div>
          <h1>Tools</h1>
          {skills.tools.map((tool) => (
            <div key={tool} className="tool-box">
              <img src="./assets/badge-check-icon.svg" alt="checked" />
              <div>{tool}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
