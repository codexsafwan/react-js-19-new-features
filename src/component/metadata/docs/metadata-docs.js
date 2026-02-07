export const react18MetaDocs = {
    title: "React 18: External Libraries",
    pros: [
        "Established ecosystem (react-helmet, react-helmet-async)",
        "Works predictably in Client Components"
    ],
    cons: [
        "Requires adding extra dependencies to your bundle",
        "Overhead of context/side-effect management",
        "Can cause hydration mismatches if not handled carefully",
        "Manual useEffect approaches are brittle and hard to clean up"
    ],
    usage: {
        label: "How it works:",
        description: "You typically rely on a library like 'react-helmet' to manage the head tags. These libraries use side-effects to inject tags into the document head after the generic component renders."
    }
};

export const react19MetaDocs = {
    title: "React 19: Native Support",
    pros: [
        "Zero dependencies required",
        "Hoisting works automatically (render tags anywhere)",
        "Works seamlessly with Streaming SSR",
        "Deduplicates identical tags automatically"
    ],
    cons: [
        "Only supported in React 19+",
        "Requires understanding of 'hoisting' behavior"
    ],
    usage: {
        label: "How it works:",
        description: "React natively recognizes <title>, <meta>, and <link> tags in your components. It automatically hoists them to the <head> section of the document, handling deduplication and ensuring they work with streaming server rendering."
    }
};
