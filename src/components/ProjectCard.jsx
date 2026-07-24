import './ProjectCard.css';

/** Card di un singolo repository GitHub. */
export default function ProjectCard({ repo }) {
  const updatedDate = new Date(repo.updated_at).toLocaleDateString('it-IT', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <a className="project-card" href={repo.html_url} target="_blank" rel="noreferrer">
      <h3 className="project-card__name">{repo.name}</h3>
      <p className="project-card__description">
        {repo.description || 'Nessuna descrizione disponibile.'}
      </p>
      <div className="project-card__meta">
        {repo.language && <span className="project-card__language">{repo.language}</span>}
        <span className="project-card__stars">★ {repo.stargazers_count}</span>
        <span className="project-card__date">Aggiornato il {updatedDate}</span>
      </div>
    </a>
  );
}
