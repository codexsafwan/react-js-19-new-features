export const react18OptimisticDocs = {
    title: "React 18: Manual Optimistic UI",
    pros: [
        "Works in all React versions",
        "Full control over the rollback logic"
    ],
    cons: [
        "Requires manual state management for 'optimistic' values",
        "Must manually handle rollback (try/catch)",
        "More boilerplate code (temp variables, error handling)"
    ],
    usage: {
        label: "How it works:",
        description: "You manually update the local state before the API call finishes. If the API fails, you must catch the error and manually revert the state to its previous value."
    }
};

export const react19OptimisticDocs = {
    title: "React 19: useOptimistic Hook",
    pros: [
        "Native support for temporary UI state",
        "Automatic rollback if the async action fails (throws)",
        "Clean separation between 'server' and 'client' state",
        "Works seamlessly with Server Actions"
    ],
    cons: [
        "Requires useTransition or Server Actions",
        "Slight learning curve for the reducer pattern"
    ],
    usage: {
        label: "How it works:",
        description: "The hook takes an initial state and a reducer. When you call the optimistic updater (addComment), it immediately updates the UI. Once the async transition finishes, the optimistic state is automatically discarded in favor of the real server state."
    }
};
