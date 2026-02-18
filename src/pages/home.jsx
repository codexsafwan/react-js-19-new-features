import React from "react";
import {
  Server,
  Zap,
  GitBranch,
  FileText,
  Box,
  Layers,
  ArrowRight,
  Linkedin,
  Github,
  Star,
  Code2,
  Sparkles,
  Activity,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

/* ─────────────────────────────────────────────
   Feature data
───────────────────────────────────────────── */
const features = [
  {
    icon: FileText,
    title: "Form Actions",
    description:
      "Simplify form submissions with the new 'action' prop, useFormStatus, and useActionState hooks. Goodbye boilerplate!",
    gradient: "from-emerald-500 to-teal-600",
    glowColor: "rgba(16,185,129,0.25)",
    link: "/docs/form-action",
    status: "Demo Ready",
    statusClass: "badge-demo",
    category: "Hooks",
  },
  {
    icon: Zap,
    title: "useOptimistic",
    description:
      "Display optimistic state immediately while a background action completes — instant, snappy UX with zero extra effort.",
    gradient: "from-blue-500 to-indigo-600",
    glowColor: "rgba(99,102,241,0.25)",
    link: "/docs/optimistic",
    status: "Demo Ready",
    statusClass: "badge-demo",
    category: "Hooks",
  },
  {
    icon: Box,
    title: "The 'use' API",
    description:
      "Read resources like Promises or Context directly inside render — no more useEffect gymnastics for async data.",
    gradient: "from-amber-500 to-orange-600",
    glowColor: "rgba(245,158,11,0.25)",
    link: "/docs/use-hook",
    status: "Demo Ready",
    statusClass: "badge-demo",
    category: "API",
  },
  {
    icon: Server,
    title: "Server Components",
    description:
      "Run components on the server for zero-bundle-size access to backend resources — the future of React rendering.",
    gradient: "from-slate-600 to-slate-800",
    glowColor: "rgba(100,116,139,0.25)",
    link: "#",
    status: "Core Concept",
    statusClass: "badge-concept",
    category: "Architecture",
  },
  {
    icon: GitBranch,
    title: "Ref as a Prop",
    description:
      "Pass 'ref' as a normal prop to function components. No more forwardRef wrapper — clean, simple, intuitive.",
    gradient: "from-cyan-500 to-sky-600",
    glowColor: "rgba(6,182,212,0.25)",
    link: "/docs/forward-ref",
    status: "Demo Ready",
    statusClass: "badge-demo",
    category: "Update",
  },
  {
    icon: Layers,
    title: "<Context> as Provider",
    description:
      "Render <Context> directly instead of <Context.Provider> — less nesting, cleaner component trees.",
    gradient: "from-violet-500 to-purple-700",
    glowColor: "rgba(139,92,246,0.25)",
    link: "#",
    status: "Update",
    statusClass: "badge-update",
    category: "Update",
  },
];

const stats = [
  { value: "6+", label: "New Features", icon: Sparkles },
  { value: "4", label: "Live Demos", icon: Activity },
  { value: "React 19", label: "Latest Version", icon: Code2 },
  { value: "100%", label: "Open Source", icon: Star },
];



/* ─────────────────────────────────────────────
   Feature Card
───────────────────────────────────────────── */
const FeatureCard = ({ feature, index }) => {
  const Icon = feature.icon;
  const isClickable = feature.link !== "#";

  const card = (
    <div
      className="hp-feature-card"
      style={{
        animationDelay: `${index * 80}ms`,
        "--glow": feature.glowColor,
      }}
    >
      {/* Gradient top bar */}
      <div className={`hp-card-bar bg-gradient-${index}`} />

      {/* Icon */}
      <div className={`hp-card-icon bg-gradient-${index}`}>
        <Icon size={22} color="white" />
      </div>

      {/* Category pill */}
      <span className="hp-category-pill">{feature.category}</span>

      {/* Content */}
      <h3 className="hp-card-title">{feature.title}</h3>
      <p className="hp-card-desc">{feature.description}</p>

      {/* Footer */}
      <div className="hp-card-footer">
        <span className={`hp-badge ${feature.statusClass}`}>{feature.status}</span>
        {isClickable && (
          <span className="hp-card-cta">
            Explore <ChevronRight size={14} />
          </span>
        )}
      </div>
    </div>
  );

  return isClickable ? (
    <Link to={feature.link} className="hp-card-link">
      {card}
    </Link>
  ) : (
    <div className="hp-card-link hp-card-disabled">{card}</div>
  );
};

/* ─────────────────────────────────────────────
   Main Page
───────────────────────────────────────────── */
const HomePage = () => {
  return (
    <div className="hp-root">

      {/* ── Hero ── */}
      <section className="hp-hero">
        {/* Decorative blobs */}
        <div className="hp-blob hp-blob-1" />
        <div className="hp-blob hp-blob-2" />
        <div className="hp-blob hp-blob-3" />

        <div className="hp-hero-inner">
          {/* Eyebrow badge */}
          <div className="hp-eyebrow">
            <Sparkles size={14} />
            <span>React 19 Is Here — Explore What's New</span>
          </div>

          <h1 className="hp-hero-title">
            React&nbsp;19
            <span className="hp-hero-gradient"> Feature</span>
            <br />
            Showcase
          </h1>

          <p className="hp-hero-sub">
            Hands-on demos and clear explanations of every major React&nbsp;19
            update — built by{" "}
            <a
              href="https://www.linkedin.com/in/safwancse/"
              target="_blank"
              rel="noreferrer"
              className="hp-hero-author"
            >
              Codex Safwan
            </a>
            .
          </p>

          {/* CTA buttons */}
          <div className="hp-hero-actions">
            <Link to="/docs/form-action" className="hp-btn hp-btn-primary">
              <Zap size={18} />
              Start Exploring
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://github.com/codexsafwan"
              target="_blank"
              rel="noreferrer"
              className="hp-btn hp-btn-ghost"
            >
              <Github size={18} />
              View on GitHub
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Social links */}
          <div className="hp-hero-socials">
            <a
              href="https://www.linkedin.com/in/safwancse/"
              target="_blank"
              rel="noreferrer"
              className="hp-social-pill"
            >
              <Linkedin size={15} /> LinkedIn
            </a>
            <a
              href="https://github.com/codexsafwan"
              target="_blank"
              rel="noreferrer"
              className="hp-social-pill"
            >
              <Github size={15} /> GitHub
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hp-scroll-hint">
          <div className="hp-scroll-dot" />
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="hp-stats-section">
        <div className="hp-stats-grid">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="hp-stat-card">
                <div className="hp-stat-icon">
                  <Icon size={20} />
                </div>
                <div className="hp-stat-value">{s.value}</div>
                <div className="hp-stat-label">{s.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Features ── */}
      <section className="hp-features-section">
        <div className="hp-section-header">
          <span className="hp-section-eyebrow">What's New in React 19</span>
          <h2 className="hp-section-title">Explore Every Feature</h2>
          <p className="hp-section-sub">
            Click any card with a <strong>Demo Ready</strong> badge to see a
            live, interactive example.
          </p>
        </div>

        <div className="hp-features-grid">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </section>

      {/* ── About / CTA Banner ── */}
      <section className="hp-cta-section">
        <div className="hp-cta-inner">
          <div className="hp-cta-blob" />
          <span className="hp-section-eyebrow" style={{ color: "rgba(255,255,255,0.7)" }}>
            About This Project
          </span>
          <h2 className="hp-cta-title">
            Learn React&nbsp;19 by Doing
          </h2>
          <p className="hp-cta-desc">
            This showcase was built to help developers understand React&nbsp;19's
            new APIs through real, runnable code — not just documentation. Each
            feature page includes a side-by-side comparison of React&nbsp;18 vs
            React&nbsp;19 patterns.
          </p>
          <div className="hp-cta-actions">
            <Link to="/docs/form-action" className="hp-btn hp-btn-white">
              <Zap size={16} /> Try Form Actions
            </Link>
            <Link to="/docs/use-hook" className="hp-btn hp-btn-outline-white">
              <Box size={16} /> Explore use() API
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
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

      {/* ── Scoped Styles ── */}
      <style>{`
        /* Root */
        .hp-root {
          min-height: 100vh;
          background: #ffffff;
          color: #1e293b;
          font-family: 'Outfit', sans-serif;
          overflow-x: hidden;
        }

        /* ── Hero ── */
        .hp-hero {
          position: relative;
          min-height: 92vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 6rem 1.5rem 4rem;
          overflow: hidden;
        }

        .hp-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.18;
          pointer-events: none;
        }
        .hp-blob-1 {
          width: 600px; height: 600px;
          background: radial-gradient(circle, #6366f1, transparent);
          top: -150px; left: -150px;
        }
        .hp-blob-2 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, #0ea5e9, transparent);
          bottom: -100px; right: -100px;
        }
        .hp-blob-3 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, #8b5cf6, transparent);
          top: 40%; left: 50%;
          transform: translate(-50%, -50%);
        }

        .hp-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 780px;
          margin: 0 auto;
        }

        .hp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(99,102,241,0.08);
          border: 1px solid rgba(99,102,241,0.25);
          color: #6366f1;
          padding: 0.4rem 1rem;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 1.75rem;
          animation: fadeSlideUp 0.6s ease both;
        }

        .hp-hero-title {
          font-size: clamp(3rem, 8vw, 5.5rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: #0f172a;
          margin-bottom: 1.25rem;
          animation: fadeSlideUp 0.7s 0.1s ease both;
        }

        .hp-hero-gradient {
          background: linear-gradient(135deg, #6366f1 0%, #0ea5e9 50%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hp-hero-sub {
          font-size: 1.15rem;
          color: #64748b;
          max-width: 560px;
          margin: 0 auto 2.5rem;
          line-height: 1.7;
          animation: fadeSlideUp 0.7s 0.2s ease both;
        }

        .hp-hero-author {
          color: #6366f1;
          font-weight: 700;
          text-decoration: none;
          border-bottom: 1px dashed rgba(99,102,241,0.4);
          transition: color 0.2s;
        }
        .hp-hero-author:hover { color: #4f46e5; }

        .hp-hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 2rem;
          animation: fadeSlideUp 0.7s 0.3s ease both;
        }

        .hp-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.6rem;
          border-radius: 0.75rem;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
          cursor: pointer;
          border: none;
          white-space: nowrap;
        }
        .hp-btn-primary {
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          color: white;
          box-shadow: 0 4px 20px rgba(99,102,241,0.4);
        }
        .hp-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(99,102,241,0.55);
        }
        .hp-btn-ghost {
          background: #f1f5f9;
          color: #334155;
          border: 1px solid #e2e8f0;
        }
        .hp-btn-ghost:hover {
          background: #e2e8f0;
          transform: translateY(-2px);
        }
        .hp-btn-white {
          background: white;
          color: #1e1b4b;
          font-weight: 700;
          border: 1.5px solid rgba(255,255,255,0.5);
        }
        .hp-btn-white:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.15); }
        .hp-btn-outline-white {
          background: transparent;
          color: white;
          border: 1.5px solid rgba(255,255,255,0.5);
        }
        .hp-btn-outline-white:hover { background: rgba(255,255,255,0.15); transform: translateY(-2px); }

        .hp-hero-socials {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
          animation: fadeSlideUp 0.7s 0.4s ease both;
        }

        .hp-social-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.9rem;
          border-radius: 9999px;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          color: #64748b;
          font-size: 0.82rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
        }
        .hp-social-pill:hover { background: #e2e8f0; color: #334155; }

        .hp-scroll-hint {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          opacity: 0.4;
        }
        .hp-scroll-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #94a3b8;
          animation: scrollBounce 1.5s ease-in-out infinite;
        }
        .hp-scroll-hint { opacity: 0.3; }

        /* ── Stats ── */
        .hp-stats-section {
          padding: 0 1.5rem;
          margin-top: -2rem;
          position: relative;
          z-index: 2;
        }
        .hp-stats-grid {
          max-width: 900px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1rem;
        }
        .hp-stat-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 1rem;
          padding: 1.5rem;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          transition: all 0.3s;
        }
        .hp-stat-card:hover {
          border-color: rgba(99,102,241,0.4);
          box-shadow: 0 8px 24px rgba(99,102,241,0.12);
          transform: translateY(-4px);
        }
        .hp-stat-icon {
          display: inline-flex;
          padding: 0.6rem;
          border-radius: 0.6rem;
          background: rgba(99,102,241,0.1);
          color: #6366f1;
          margin-bottom: 0.75rem;
        }
        .hp-stat-value {
          font-size: 1.75rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1;
          margin-bottom: 0.3rem;
        }
        .hp-stat-label {
          font-size: 0.82rem;
          color: #94a3b8;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* ── Features ── */
        .hp-features-section {
          padding: 5rem 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .hp-section-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .hp-section-eyebrow {
          display: inline-block;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #6366f1;
          margin-bottom: 0.75rem;
        }
        .hp-section-title {
          font-size: clamp(1.8rem, 4vw, 2.75rem);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.02em;
          margin-bottom: 0.75rem;
        }
        .hp-section-sub {
          color: #64748b;
          font-size: 1rem;
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .hp-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.25rem;
        }

        .hp-card-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }
        .hp-card-disabled { cursor: default; }

        .hp-feature-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 1.25rem;
          padding: 1.75rem;
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          animation: fadeSlideUp 0.5s ease both;
          height: 100%;
          display: flex;
          flex-direction: column;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .hp-card-link:not(.hp-card-disabled) .hp-feature-card:hover {
          background: #fafbff;
          border-color: rgba(99,102,241,0.35);
          transform: translateY(-6px);
          box-shadow: 0 16px 40px var(--glow, rgba(99,102,241,0.15));
        }

        .hp-card-bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          border-radius: 1.25rem 1.25rem 0 0;
        }

        /* Gradient variants for the bar & icon */
        .bg-gradient-0 { background: linear-gradient(135deg, #10b981, #0d9488); }
        .bg-gradient-1 { background: linear-gradient(135deg, #3b82f6, #4f46e5); }
        .bg-gradient-2 { background: linear-gradient(135deg, #f59e0b, #ea580c); }
        .bg-gradient-3 { background: linear-gradient(135deg, #475569, #1e293b); }
        .bg-gradient-4 { background: linear-gradient(135deg, #06b6d4, #0284c7); }
        .bg-gradient-5 { background: linear-gradient(135deg, #8b5cf6, #7c3aed); }

        .hp-card-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px; height: 44px;
          border-radius: 0.75rem;
          margin-bottom: 1rem;
          flex-shrink: 0;
        }

        .hp-category-pill {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #94a3b8;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 0.2rem 0.6rem;
          border-radius: 9999px;
          margin-bottom: 0.75rem;
        }

        .hp-card-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.6rem;
          letter-spacing: -0.01em;
        }

        .hp-card-desc {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.65;
          flex: 1;
          margin-bottom: 1.25rem;
        }

        .hp-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
        }

        .hp-badge {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 0.25rem 0.65rem;
          border-radius: 9999px;
        }
        .badge-demo {
          background: rgba(16,185,129,0.1);
          color: #059669;
          border: 1px solid rgba(16,185,129,0.25);
        }
        .badge-concept {
          background: #f1f5f9;
          color: #64748b;
          border: 1px solid #e2e8f0;
        }
        .badge-update {
          background: rgba(99,102,241,0.08);
          color: #6366f1;
          border: 1px solid rgba(99,102,241,0.2);
        }

        .hp-card-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.82rem;
          font-weight: 700;
          color: #6366f1;
          transition: gap 0.2s;
        }
        .hp-card-link:not(.hp-card-disabled):hover .hp-card-cta { gap: 0.5rem; }

        /* ── CTA Banner ── */
        .hp-cta-section {
          margin: 0 1.5rem 4rem;
          border-radius: 1.5rem;
          background: linear-gradient(135deg, #312e81 0%, #1e1b4b 40%, #0f172a 100%);
          border: 1px solid rgba(99,102,241,0.2);
          overflow: hidden;
          position: relative;
        }
        .hp-cta-inner {
          position: relative;
          z-index: 1;
          max-width: 700px;
          margin: 0 auto;
          padding: 4rem 2rem;
          text-align: center;
        }
        .hp-cta-blob {
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(99,102,241,0.3), transparent);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        .hp-cta-title {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 800;
          color: #f8fafc;
          letter-spacing: -0.02em;
          margin: 0.5rem 0 1rem;
        }
        .hp-cta-desc {
          color: rgba(255,255,255,0.6);
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 2rem;
        }
        .hp-cta-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* ── Footer ── */
        .hp-footer {
          border-top: 1px solid #e2e8f0;
          padding: 2rem 1.5rem;
          background: #f8fafc;
        }
        .hp-footer-inner {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .hp-footer-brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          color: #334155;
          font-size: 0.95rem;
        }
        .hp-footer-copy {
          font-size: 0.82rem;
          color: #94a3b8;
        }
        .hp-footer-links {
          display: flex;
          gap: 1rem;
        }
        .hp-footer-links a {
          color: #94a3b8;
          transition: color 0.2s;
        }
        .hp-footer-links a:hover { color: #6366f1; }

        /* ── Animations ── */
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(8px); }
        }

        /* ── Responsive ── */
        @media (max-width: 640px) {
          .hp-hero { padding: 5rem 1rem 3rem; }
          .hp-features-grid { grid-template-columns: 1fr; }
          .hp-footer-inner { flex-direction: column; text-align: center; }
          .hp-cta-inner { padding: 3rem 1.25rem; }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
