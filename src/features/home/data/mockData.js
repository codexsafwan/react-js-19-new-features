import {
  Server,
  Zap,
  GitBranch,
  FileText,
  Box,
  Layers,
  Sparkles,
  Activity,
  Star,
  Code2
} from "lucide-react";

export const features = [
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

export const stats = [
  { value: "6+", label: "New Features", icon: Sparkles },
  { value: "4", label: "Live Demos", icon: Activity },
  { value: "React 19", label: "Latest Version", icon: Code2 },
  { value: "100%", label: "Open Source", icon: Star },
];
