import React from "react";
import { Link } from "react-router-dom";
import {
  Zap,
  ArrowRight,
  Linkedin,
  Github,
  ChevronRight,
  ExternalLink,
  Sparkles,
  Code2,
  Box,
} from "lucide-react";
import { FeatureCard } from "../features/home/components/FeatureCard";
import { features, stats } from "../features/home/data/mockData";
import "../features/home/styles/home.css";

/* ─────────────────────────────────────────────
   Main Page
───────────────────────────────────────────── */
const HomePage = () => {
  return (
    <>
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
    </>
  );
};

export default HomePage;
