export const react19UseActionStateDocs = {
    title: "Why use React 19 useActionState?",
    pros: [
        "Built-in pending state management (isPending).",
        "Structured return values (state) for success/error handling.",
        "Works with Server Actions perfectly.",
        "Replaces prev useFormState and manual loading states."
    ],
    cons: [
        "Slightly more complex API than simple actions.",
        "Requires handling previous state in action signature."
    ],
    usage: {
        label: "When to use:",
        description: "Use for most server actions where you need to verify the result (validation errors) or show a loading indicator during the request."
    }
};
