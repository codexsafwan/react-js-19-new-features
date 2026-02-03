import { useState } from "react";
import SlowList from "./SlowList";
import CodeModal from "../common/CodeModal";

export default function BlockingExample() {
    const [text, setText] = useState("");
    const [showCode, setShowCode] = useState(false);

    const handleChange = (e) => {
        // Standard update: Blocks the main thread
        setText(e.target.value);
    };

    const codeSnippet = `
const [text, setText] = useState("");

const handleChange = (e) => {
  // Standard update: Blocks the main thread
  setText(e.target.value);
};

return (
  <input
    type="text"
    value={text}
    onChange={handleChange}
  />
  <SlowList text={text} />
);
  `;

    return (
        <div className="premium-card animate-fade-in flex flex-col h-full" style={{ borderColor: 'hsl(var(--danger) / 0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <span className="badge badge-danger">
                        Blocking Update
                    </span>
                    <span className="badge" style={{ background: 'hsl(var(--danger) / 0.1)', color: 'hsl(var(--danger))' }}>
                        THE PROBLEM
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

            <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem', letterSpacing: '-0.025em' }}>Blocking UI</h2>
            <p style={{ color: 'hsl(var(--foreground) / 0.7)', fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                Typing here will feel laggy because every keystroke triggers a slow re-render. The main thread is occupied and cannot process input smoothly.
            </p>

            <div style={{ marginTop: 'auto' }}>
                <input
                    type="text"
                    value={text}
                    onChange={handleChange}
                    placeholder="Type here to see lag..."
                    className="premium-input"
                    style={{ borderColor: 'hsl(var(--danger) / 0.3)' }}
                />

                <SlowList text={text} />
            </div>

            <CodeModal
                show={showCode}
                onHide={() => setShowCode(false)}
                title="Blocking Update Code"
                code={codeSnippet}
            />
        </div>
    );
}
