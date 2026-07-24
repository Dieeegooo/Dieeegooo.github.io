import { useEffect, useState } from 'react';

const GITHUB_USERNAME = 'Dieeegooo';
const REPOS_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`;

/**
 * Carica a runtime i repository pubblici dell'utente dall'API GitHub.
 * Esclude i fork e i repository vuoti, poi ordina per data di ultimo aggiornamento.
 */
export function useGithubRepos() {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState('loading'); // 'loading' | 'success' | 'error'
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchRepos() {
      try {
        const response = await fetch(REPOS_URL);

        if (!response.ok) {
          throw new Error(`GitHub API ha risposto con status ${response.status}`);
        }

        const data = await response.json();

        const filtered = data
          .filter((repo) => !repo.fork && repo.size > 0)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

        if (!cancelled) {
          setRepos(filtered);
          setStatus('success');
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || 'Errore durante il caricamento dei repository.');
          setStatus('error');
        }
      }
    }

    fetchRepos();

    return () => {
      cancelled = true;
    };
  }, []);

  return { repos, status, error };
}
