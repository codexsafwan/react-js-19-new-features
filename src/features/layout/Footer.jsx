import { Code2, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
      <footer className="hp-footer">
        <div className="hp-footer-inner">
          <div className="hp-footer-brand">
            <Code2 size={20} />
            <span>Codex Safwan</span>
          </div>
          <p className="hp-footer-copy">
            © {new Date().getFullYear()} Codex Safwan · Built with React&nbsp;19
            &amp; Vite · Open Source
          </p>
          <div className="hp-footer-links">
            <a
              href="https://www.linkedin.com/in/safwancse/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/codexsafwan"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </footer>  
      
    )
}

export default Footer