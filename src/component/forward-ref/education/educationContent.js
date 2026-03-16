export const lesson01Education = {
    why: "Simplifies component creation and reduces React API surface area.",
    how: "Access ref directly from props along with other properties.",
    when: "Any functional component that needs to expose a DOM node or imperative handle.",
    comparison: [
        { react18: "Wrapped in React.forwardRef", react19: "Standard functional component" },
        { react18: "Needs displayName for DevTools", react19: "Automatically uses function name" }
    ]
};

export const lesson02Education = {
    why: "Passing refs is now as straightforward as passing any other prop.",
    how: "Use standard prop destructuring to get the ref and pass it to DOM elements.",
    when: "Managing focus, animations, or third-party DOM libraries in nested components.",
    comparison: [
        { react18: "Higher Order Component (HOC) mental model", react19: "Props-down mental model" },
        { react18: "Prop drilling refs was confusing", react19: "Prop drilling refs is exactly like any prop" }
    ]
};
