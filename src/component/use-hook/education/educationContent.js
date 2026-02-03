// Educational content for all lessons

export const lesson01Education = {
    why: "Eliminates boilerplate. No more useState + useEffect combos for fetching.",
    how: "Pass a promise to use(). Wrap with Suspense for loading state.",
    when: "API calls, database queries, any async data loading.",
    comparison: [
        { react18: "useState + useEffect", react19: "use(promise)" },
        { react18: "Manual loading state", react19: "Automatic via Suspense" }
    ]
};

export const lesson02Education = {
    why: "Breaks the 'hooks at top level' rule. Flexible context reading.",
    how: "Call use(Context) anywhere, even after conditionals.",
    when: "Early returns, conditional rendering, permission checks.",
    comparison: [
        { react18: "useContext top-level only", react19: "use() anywhere" },
        { react18: "Must read before conditions", react19: "Read after early returns" }
    ]
};

export const lesson03Education = {
    why: "Unified error handling. Rejected promises auto-bubble to boundaries.",
    how: "Wrap with ErrorBoundary + Suspense. Errors propagate automatically.",
    when: "Network failures, API errors, data validation failures.",
    comparison: [
        { react18: "try/catch in useEffect", react19: "ErrorBoundary catches rejections" },
        { react18: "Manual error state", react19: "Declarative error UI" }
    ]
};

export const lesson04Education = {
    why: "Less nesting. Read multiple contexts without Provider pyramids.",
    how: "Call use() for each context in any order.",
    when: "Global state, themes, auth, multi-context components.",
    comparison: [
        { react18: "Nested .Provider wrappers", react19: "<Context value> directly" },
        { react18: "Multiple useContext calls", react19: "use() anywhere needed" }
    ]
};

export const lesson05Education = {
    why: "Unified API. use() works for both promises and contexts.",
    how: "Replace useContext(X) with use(X).",
    when: "Migrating to React 19, new components, conditional context.",
    comparison: [
        { react18: "useContext(Context)", react19: "use(Context)" },
        { react18: "Must follow hooks rules", react19: "Flexible placement" }
    ]
};
