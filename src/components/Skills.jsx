import { skillGroups } from '../data/skills';
import './Skills.css';

/** Elenco di linguaggi e tecnologie, raggruppati per categoria. */
export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">
          Le mie <span>skill</span>
        </h2>
        <div className="skills">
          {skillGroups.map((group) => (
            <div key={group.title} className="skills__group">
              <h3 className="skills__group-title">{group.title}</h3>
              <div className="skills__badges">
                {group.skills.map((skill) => (
                  <img key={skill.name} src={skill.badge} alt={skill.name} loading="lazy" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
