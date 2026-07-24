import { timeline } from '../data/timeline';
import './Timeline.css';

/** Percorso di crescita informatica, mostrato come timeline verticale. */
export default function Timeline() {
  return (
    <section id="percorso" className="section">
      <div className="container">
        <h2 className="section-title">
          Il mio <span>percorso</span>
        </h2>
        <ol className="timeline">
          {timeline.map((step) => (
            <li
              key={step.title}
              className={`timeline__item${step.current ? ' timeline__item--current' : ''}`}
            >
              <div className="timeline__marker" />
              <div className="timeline__content">
                <span className="timeline__date">{step.date}</span>
                <h3 className="timeline__title">{step.title}</h3>
                <p className="timeline__description">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
