import { useGithubRepos } from '../hooks/useGithubRepos';
import ProjectCard from './ProjectCard';
import './Projects.css';

/**
 * Sezione progetti: carica i repository pubblici da GitHub a runtime
 * e mostra i relativi stati di caricamento/errore.
 */
export default function Projects() {
  const { repos, status, error } = useGithubRepos();

  return (
    <section id="progetti" className="section">
      <div className="container">
        <h2 className="section-title">
          I miei <span>progetti</span>
        </h2>

        {status === 'loading' && <p className="projects__status">Caricamento progetti da GitHub…</p>}

        {status === 'error' && (
          <p className="projects__status projects__status--error">
            Non è stato possibile caricare i progetti da GitHub ({error}). Riprova più tardi o
            visita direttamente il{' '}
            <a href="https://github.com/Dieeegooo" target="_blank" rel="noreferrer">
              profilo GitHub
            </a>
            .
          </p>
        )}

        {status === 'success' && repos.length === 0 && (
          <p className="projects__status">Nessun progetto pubblico da mostrare al momento.</p>
        )}

        {status === 'success' && repos.length > 0 && (
          <div className="projects__grid">
            {repos.map((repo) => (
              <ProjectCard key={repo.id} repo={repo} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
