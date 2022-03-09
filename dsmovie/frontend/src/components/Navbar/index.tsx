import "./styles.css";
import GithubIcon from "assets/img/github.svg";
export function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a
            href="https://github.com/devsuperior"
            target="_blank"
            rel="noreferrer"
          >
            <div className="dsmovie-contact-container">
              <img src={GithubIcon} alt="React Logo" />
              <p className="dsmovie-contact-link">/leandro8279</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}
