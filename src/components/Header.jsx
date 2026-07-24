import ThemeToggle from './ThemeToggle';
import './Header.css';

const NAV_LINKS = [
  { href: '#skills', label: 'Skills' },
  { href: '#percorso', label: 'Percorso' },
  { href: '#progetti', label: 'Progetti' },
  { href: '#contatti', label: 'Contatti' },
];

/** Barra di navigazione fissa con link alle sezioni e toggle tema. */
export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="header__brand">
          Diego Barbagallo
        </a>
        <nav className="header__nav">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
