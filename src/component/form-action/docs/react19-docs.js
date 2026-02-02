export const react19Docs = {
    title: "Why use React 19 Actions?",
    pros: [
        "Cleaner syntax, less boilerplate (no useState/onChange).",
        "Automatically handles FormData extraction.",
        "Progressive enhancement ready (function works without JS if SSR)."
    ],
    cons: [
        "Requires React 19.",
        "Simple actions don't track loading state automatically (need useActionState).",
        "Less control over real-time input validation (wait for submit)."
    ],
    usage: {
        label: "When to use:",
        description: "Use for standard data submission forms where you only care about the final result on submit, or when migrating to modern React Server Components patterns."
    }
};
