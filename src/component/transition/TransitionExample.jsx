import { useState, useTransition } from "react";
import SlowList from "./SlowList";
import CodeModal from "../common/CodeModal";

export default function TransitionExample() {
    const [isPending, startTransition] = useTransition();
    const [inputValue, setInputValue] = useState("");
    const [listValue, setListValue] = useState("");
    const [showCode, setShowCode] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        // 1. Update the input immediately (High priority)
        setInputValue(value);

        // 2. Schedule the slow update in a transition (Lower priority)
        startTransition(() => {
            setListValue(value);
        });
    };

    const codeSnippet = `
const [isPending, startTransition] = useTransition();
const [inputValue, setInputValue] = useState("");
const [listValue, setListValue] = useState("");

const handleChange = (e) => {
    const value = e.target.value;
    // 1. Update the input immediately (High priority)
    setInputValue(value);

    // 2. Schedule the slow update in a transition (Lower priority)
    startTransition(() => {
        setListValue(value);
    });
};

return (
    <>
        <input value={inputValue} onChange={handleChange} />
        {isPending && <Spinner />}
        <div className={isPending ? "opacity-50" : ""}>
            <SlowList text={listValue} />
        </div>
    </>
);
`;

    return (
        <div className="premium-card animate-fade-in flex flex-col h-full relative" style={{ borderColor: 'hsl(var(--success) / 0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <span className="badge badge-success">
                        useTransition
                    </span>
                    <span className="badge" style={{ background: 'hsl(var(--success) / 0.1)', color: 'hsl(var(--success))' }}>
                        REACT 19 BASE
                    </span>
                </div>
                <button
                    onClick={() => setShowCode(true)}
                    className="premium-button text-xs"
                    style={{ padding: '0.4rem 0.8rem', background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                    Show Code
                </button>
            </div>

            <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem', letterSpacing: '-0.025em' }}>Non-Blocking UI</h2>
            <p style={{ color: 'hsl(var(--foreground) / 0.7)', fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                Typing here stays smooth! The input updates instantly at high priority, while the list renders in the background at lower priority.
            </p>

            <div style={{ marginTop: 'auto' }}>
                <div style={{ position: 'relative' }}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                        placeholder="Type here for smooth experience..."
                        className="premium-input"
                        style={{ borderColor: 'hsl(var(--success) / 0.3)' }}
                    />
                    {isPending && (
                        <div style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)' }}>
                            <div className="loading-spinner" style={{
                                width: '1.25rem', height: '1.25rem', border: '2px solid hsl(var(--success))',
                                borderTopColor: 'transparent', borderRadius: '50%',
                                animation: 'spin 0.6s linear infinite'
                            }}></div>
                        </div>
                    )}
                </div>

                <div style={{ opacity: isPending ? 0.4 : 1 }}>
                    <SlowList text={listValue} />
                </div>
            </div>

            <CodeModal
                show={showCode}
                onHide={() => setShowCode(false)}
                title="useTransition Code"
                code={codeSnippet}
            />

            <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
        </div>
    );
}
