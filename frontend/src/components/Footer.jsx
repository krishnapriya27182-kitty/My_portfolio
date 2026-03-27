import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-logo">
          Renika<span> J</span>
        </span>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Student Developer. Crafted with Passion.
        </p>
        <div className="footer-socials">
          <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
