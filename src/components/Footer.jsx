import './Footer.css';

/** Piè di pagina minimale. */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Diego Barbagallo</p>
      </div>
    </footer>
  );
}
