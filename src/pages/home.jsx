import React from "react";
import { Server, Activity, Zap, GitBranch, FileText, Box, Monitor, Layers, Cpu } from "lucide-react";

const features = [
  {
    icon: <Server className="me-2" />,
    title: "Server Components",
    description: "Build components that run on the server for better performance and reduced bundle size.",
    color: "bg-primary text-white",
  },
  {
    icon: <Activity className="me-2" />,
    title: "Streaming SSR",
    description: "Render HTML on the server progressively for faster page loads.",
    color: "bg-success text-white",
  },
  {
    icon: <Zap className="me-2" />,
    title: "Improved Suspense",
    description: "Suspense now supports data fetching for seamless UI loading states.",
    color: "bg-danger text-white",
  },
  {
    icon: <GitBranch className="me-2" />,
    title: "Concurrent Rendering",
    description: "Better concurrent rendering for smoother UI and faster updates.",
    color: "bg-info text-white",
  },
  {
    icon: <Box className="me-2" />,
    title: "New Hooks",
    description: "Includes useSyncExternalStore, useInsertionEffect, and useId for modern React patterns.",
    color: "bg-warning text-white",
  },
  {
    icon: <FileText className="me-2" />,
    title: "Streaming SSR with ReactDOM",
    description: "Enhanced integration with ReactDOM for streaming server-side rendering.",
    color: "bg-secondary text-white",
  },
  {
    icon: <Monitor className="me-2" />,
    title: "Improved TypeScript Support",
    description: "Better type inference and compatibility for TypeScript projects.",
    color: "bg-dark text-white",
  },
  {
    icon: <Layers className="me-2" />,
    title: "New JSX Transform",
    description: "Simpler JSX transform for faster compilation and smaller bundles.",
    color: "bg-success text-white",
  },
  {
    icon: <Cpu className="me-2" />,
    title: "React DevTools 19 Enhancements",
    description: "Enhanced DevTools support for inspecting concurrent features and server components.",
    color: "bg-warning text-white",
  },
  {
    icon: <Activity className="me-2" />,
    title: "Performance & Memory Improvements",
    description: "Optimizations to make React apps faster and more memory-efficient.",
    color: "bg-primary text-white",
  },
];

const HomePage = () => {
  return (
    <div className="bg-light min-vh-100">

      {/* Hero Section */}
      <section
        className="py-5 text-center text-white"
        style={{ background: 'linear-gradient(90deg, #4f46e5, #3b82f6)' }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">React 19 Learning Hub</h1>
          <p className="lead mb-4">Author: <strong>Codex Safwan</strong></p>
          <div className="d-flex justify-content-center gap-2 flex-wrap">
            <a href="/docs/getting-started" className="btn btn-light btn-lg">
              Getting Started
            </a>
            <a href="/docs/form-action" className="btn btn-outline-light btn-lg">
              Form Actions
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">React 19 Key Features</h2>
          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className={`card-body ${feature.color} rounded-top mb-3 d-flex align-items-center`}>
                    {feature.icon}
                    <h5 className="card-title mb-0">{feature.title}</h5>
                  </div>
                  <p className="card-text px-3">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white text-center">
        <div className="container">
          <h2 className="mb-3">Start Exploring React 19 Today</h2>
          <p className="mb-4">
            Build modern, interactive, and high-performance web apps with React 19 features.
          </p>
          <a href="/docs/getting-started" className="btn btn-light btn-lg">
            Learn Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 text-center">
        <div className="container">
          <p className="mb-1">&copy; 2026 Codex Safwan. All rights reserved.</p>
          <p className="mb-0 small">
            Follow for updates: <a href="#" className="text-white">Twitter</a> | <a href="#" className="text-white">GitHub</a> | <a href="#" className="text-white">LinkedIn</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
