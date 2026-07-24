import './Contact.css';

const EMAIL = 'dieegobarbagallo@gmail.com';
const GITHUB_URL = 'https://github.com/Dieeegooo';

/** Sezione contatti: email e link al profilo GitHub. */
export default function Contact() {
  return (
    <section id="contatti" className="section">
      <div className="container contact">
        <h2 className="section-title">
          Contatt<span>ami</span>
        </h2>
        <p className="contact__text">
          Sono alla ricerca di un&apos;opportunità di stage a partire da novembre 2026. Se hai un
          progetto o un&apos;opportunità in cui potrei essere utile, scrivimi.
        </p>
        <div className="contact__links">
          <a className="contact__link" href={`mailto:${EMAIL}`}>
            ✉️ {EMAIL}
          </a>
          <a className="contact__link" href={GITHUB_URL} target="_blank" rel="noreferrer">
            🐙 github.com/Dieeegooo
          </a>
        </div>
      </div>
    </section>
  );
}
