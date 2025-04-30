import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto px-4 text-center">
        <p>Retrouvez-moi</p>
        <a
          href="https://www.linkedin.com/in/charly-guinel/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
        </a>
        <a
          href="https://github.com/GuinelC"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <p className="text-center text-sm mt-6">
          © {new Date().getFullYear()} Guinel Charly. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
