import { useState, useTransition } from "react";
import CodeModal from "../common/CodeModal";

export default function AsyncTransitionExample() {
    const [isPending, startTransition] = useTransition();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [showCode, setShowCode] = useState(false);

    const handleAsyncAction = () => {
        // React 19 now supports async functions in startTransition!
        startTransition(async () => {
            setError(null);
            try {
                // Simulate a slow API call
                await new Promise(resolve => setTimeout(resolve, 2000));

                // Randomly simulate success or error
                if (Math.random() > 0.5) {
                    setData(`Updated at ${new Date().toLocaleTimeString()}`);
                } else {
                    throw new Error("Simulated network failure");
                }
            } catch (e) {
                setError(e.message);
            }
        });
    };

    const codeSnippet = `
const [isPending, startTransition] = useTransition();

const handleAsyncAction = () => {
  // React 19 supports async functions in startTransition!
  startTransition(async () => {
    await someAsyncWork();
    setData("Success");
  });
};

return (
  <button onClick={handleAsyncAction} disabled={isPending}>
    {isPending ? "Processing..." : "Run"}
  </button>
);
  `;

    return (
        <div className="premium-card animate-fade-in md:col-span-2 relative flex flex-col" style={{
            borderColor: 'hsl(var(--primary) / 0.1)',
            borderWidth: '2px',
            background: 'linear-gradient(to bottom right, hsl(var(--card)), hsl(var(--primary-light) / 0.3))'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <span className="badge badge-primary">
                        React 19 Transition
                    </span>
                    <span className="badge" style={{ background: 'hsl(var(--accent))', color: 'white' }}>
                        NEW FEATURE
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

            <h2 style={{ fontSize: '1.75rem', fontWeight: '900', marginBottom: '0.75rem', letterSpacing: '-0.03em' }}>Async Transitions</h2>
            <p style={{ color: 'hsl(var(--foreground) / 0.7)', fontSize: '1rem', marginBottom: '2rem', maxWidth: '80ch' }}>
                <strong>Major Upgrade:</strong> In React 19, <code>startTransition</code> now natively handles <code>async</code> functions. This means you can wrap data fetching or complex async logic directly in a transition.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', flexGrow: 1, justifyContent: 'center', padding: '2rem 0' }}>
                <button
                    onClick={handleAsyncAction}
                    disabled={isPending}
                    className="premium-button premium-button-primary"
                    style={{ padding: '1rem 2.5rem', fontSize: '1.125rem', opacity: isPending ? 0.7 : 1 }}
                >
                    {isPending ? (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div className="loading-spinner" style={{
                                width: '1.25rem', height: '1.25rem', border: '2.5px solid white',
                                borderTopColor: 'transparent', borderRadius: '50%',
                                animation: 'spin 0.6s linear infinite'
                            }}></div>
                            Processing Request...
                        </span>
                    ) : (
                        "Trigger Async Action"
                    )}
                </button>

                <div style={{ width: '100%', maxWidth: '450px' }}>
                    {error && (
                        <div style={{
                            padding: '1rem', background: 'hsl(var(--danger-light))', color: 'hsl(var(--danger))',
                            border: '1px solid hsl(var(--danger) / 0.2)', borderRadius: '0.75rem',
                            fontSize: '0.9rem', marginBottom: '1.5rem', textAlign: 'center', fontWeight: '500'
                        }}>
                            ❌ {error}
                        </div>
                    )}

                    {data && !isPending && !error && (
                        <div style={{
                            padding: '1.25rem', background: 'hsl(var(--success-light))', color: 'hsl(var(--success))',
                            border: '1px solid hsl(var(--success) / 0.2)', borderRadius: '0.75rem',
                            textAlign: 'center', fontWeight: '600', animation: 'fadeIn 0.4s ease-out'
                        }}>
                            ✅ {data}
                        </div>
                    )}

                    <div style={{
                        width: '100%', height: '8px', background: 'hsl(var(--background))',
                        borderRadius: '999px', overflow: 'hidden', marginTop: '1rem', border: '1px solid hsl(var(--border))'
                    }}>
                        <div
                            className={isPending ? 'progress-shimmer' : ''}
                            style={{
                                height: '100%', background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))',
                                transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                width: isPending ? '100%' : '0%'
                            }}
                        ></div>
                    </div>
                </div>
            </div>

            <div style={{
                marginTop: '2rem', padding: '1rem', background: 'hsl(var(--primary-light))',
                borderRadius: '1rem', border: '1px dashed hsl(var(--primary) / 0.3)'
            }}>
                <p style={{ display: 'flex', gap: '0.75rem', fontSize: '0.85rem', color: 'hsl(var(--primary-dark))', lineHeight: '1.5' }}>
                    <span style={{ fontSize: '1.25rem' }}>💡</span>
                    <span>
                        <strong>Developer Note:</strong> This pattern is ideal for Server Actions. You no longer need to manually manage local <code>loading</code> state; React's transition system handles the lifecycle for you.
                    </span>
                </p>
            </div>

            <CodeModal
                show={showCode}
                onHide={() => setShowCode(false)}
                title="Async Transition Code"
                code={codeSnippet}
            />

            <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        .progress-shimmer {
          background-size: 200% 100% !important;
          animation: shimmer 1.5s infinite linear;
        }
        @keyframes shimmer { 
          from { background-position: 200% 0; } 
          to { background-position: -200% 0; } 
        }
      `}</style>
        </div>
    );
}
