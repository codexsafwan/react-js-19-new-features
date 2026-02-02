export const react19UseFormStatusDocs = {
    title: "Why use useFormStatus?",
    pros: [
        "Provides loading state (pending) without prop drilling.",
        "Allows child components (like buttons) to react to form submission automatically.",
        "Great for UI feedback in deeply nested components."
    ],
    cons: [
        "Must be used inside a child component of the <form>.",
        "Does not work if used in the same component rendering the <form>."
    ],
    usage: {
        label: "When to use:",
        description: "Use for submit buttons or loading indicators that need to show feedback during a server action submission."
    }
};
