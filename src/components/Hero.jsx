import './Hero.css';

const GITHUB_URL = 'https://github.com/Dieeegooo';
const AVATAR_URL = 'https://avatars.githubusercontent.com/u/256335338?v=4';

/** Sezione di apertura: nome, tagline sul percorso e link al profilo GitHub. */
export default function Hero() {
  return (
    <section id="top" className="hero section">
      <div className="container hero__inner">
        <img
          className="hero__avatar"
          src={AVATAR_URL}
          alt="Foto profilo di Diego Barbagallo"
          width="140"
          height="140"
        />
        <h1 className="hero__title">Diego Barbagallo</h1>
        <p className="hero__tagline">
          Studente Full Stack Developer in formazione presso ITS Academy Prodigi — imparo
          costruendo progetti reali con Java, PHP/Laravel, JavaScript e React, in cerca del
          primo stage.
        </p>
        <div className="hero__actions">
          <a
            className="hero__button hero__button--primary"
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
          >
            Vedi il mio GitHub
          </a>
          <a className="hero__button hero__button--ghost" href="#progetti">
            Guarda i progetti
          </a>
        </div>
      </div>
    </section>
  );
}
