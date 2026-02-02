import React from "react";
import { Server, Activity, Zap, GitBranch, FileText, Box, Monitor, Layers, Cpu, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <FileText className="me-2" size={24} />,
    title: "Form Actions",
    description: "Simplify form submissions with the new 'action' prop, useFormStatus, and useActionState hooks.",
    color: "bg-success text-white",
    link: "/docs/form-action",
    status: "Demo Ready",
    statusColor: "bg-light text-success"
  },
  {
    icon: <Zap className="me-2" size={24} />,
    title: "useOptimistic",
    description: "Display optimistic state immediately while a background action completes.",
    color: "bg-primary text-white",
    link: "#",
    status: "Coming Soon",
    statusColor: "bg-white text-dark opacity-75"
  },
  {
    icon: <Box className="me-2" size={24} />,
    title: "The 'use' API",
    description: "Read resources like Promises or Context directly in render.",
    color: "bg-warning text-dark",
    link: "#",
    status: "Info Only",
    statusColor: "bg-dark text-white"
  },
  {
    icon: <Server className="me-2" size={24} />,
    title: "Server Components",
    description: "Run components on the server for zero-bundle-size/latency access to backend resources.",
    color: "bg-dark text-white",
    link: "#",
    status: "Core Concept",
    statusColor: "bg-secondary text-white"
  },
  {
    icon: <GitBranch className="me-2" size={24} />,
    title: "Ref as a Prop",
    description: "Pass 'ref' as a normal prop to function components. No more forwardRef!",
    color: "bg-info text-white",
    link: "#",
    status: "Update",
    statusColor: "bg-white text-info"
  },
  {
    icon: <Layers className="me-2" size={24} />,
    title: "<Context> as Provider",
    description: "Render <Context> directly instead of <Context.Provider>.",
    color: "bg-secondary text-white",
    link: "#",
    status: "Update",
    statusColor: "bg-dark text-white"
  }
];

const HomePage = () => {
  return (
    <div className="bg-light min-vh-100 font-sans">

      {/* Hero Section */}
      <section
        className="py-5 text-center text-white"
        style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' }}
      >
        <div className="container py-5">
          <div className="d-inline-block p-2 px-3 bg-white bg-opacity-25 rounded-pill mb-3 backdrop-blur">
            <span className="small fw-bold text-uppercase tracking-wider">React 19 Is Here</span>
          </div>
          <h1 className="display-3 fw-bold mb-3">React 19 Feature Showcase</h1>
          <p className="lead mb-4 opacity-90" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Explored & Implemented by <strong className="text-warning">Codex Safwan</strong>.
            <br />
            Dive into practical examples of the latest hooks and patterns.
          </p>

          <div className="d-flex justify-content-center gap-3 mt-4">
            <a
              href="https://www.linkedin.com/in/safwancse/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-light btn-lg d-flex align-items-center gap-2"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
            <a
              href="https://github.com/codexsafwan"
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark btn-lg d-flex align-items-center gap-2 border-white"
            >
              <Github size={20} /> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Dashboard Grid */}
      <section className="py-5">
        <div className="container" style={{ marginTop: '-60px' }}>
          <div className="row g-4 justify-content-center">
            {features.map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <Link to={feature.link} className="text-decoration-none">
                  <div className={`card h-100 shadow border-0 overflow-hidden transform-hover`}>
                    <div className={`card-header ${feature.color} border-0 py-3 d-flex justify-content-between align-items-center`}>
                      <div className="d-flex align-items-center">
                        {feature.icon}
                        <h5 className="mb-0 fw-bold">{feature.title}</h5>
                      </div>
                      <span className={`badge ${feature.statusColor} rounded-pill`}>
                        {feature.status}
                      </span>
                    </div>
                    <div className="card-body bg-white text-dark">
                      <p className="card-text text-muted">
                        {feature.description}
                      </p>
                      {feature.status === "Demo Ready" && (
                        <div className="mt-3 text-primary fw-bold small text-uppercase">
                          Try Demo &rarr;
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-top py-4 text-center mt-auto">
        <div className="container">
          <p className="mb-0 text-muted">
            &copy; {new Date().getFullYear()} <strong className="text-dark">Codex Safwan</strong>. Built with React 19 & Vite.
          </p>
        </div>
      </footer>

      <style>{`
        .transform-hover { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .transform-hover:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important; }
      `}</style>
    </div>
  );
};

export default HomePage;
