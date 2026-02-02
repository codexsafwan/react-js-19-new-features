export const react19UseFormStateDocs = {
    title: "Why use useFormState?",
    pros: [
        "Manages form state (data, errors) returned from Server Actions.",
        "Progressive enhancement compatible.",
        "Canonical hook for form submissions (formerly useFormState, now useActionState in latest docs)."
    ],
    cons: [
        "Requires defined initial state.",
        "Must handle previous state in action signature."
    ],
    usage: {
        label: "When to use:",
        description: "Use when you need to access the result of a form submission (like validation errors) and update the UI accordingly."
    }
};
