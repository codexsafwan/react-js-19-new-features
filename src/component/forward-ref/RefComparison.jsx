import React, { useRef } from 'react';

// --- React 18 Pattern (The Old Way) ---
const LegacyInput = React.forwardRef((props, ref) => {
    return (
        <div className="input-container">
            <span className="badge badge-secondary" style={{ marginBottom: '1rem' }}>React 18</span>
            <input 
                ref={ref} 
                {...props} 
                className="custom-input"
                placeholder="forwardRef required..."
            />
            <style>{`
                .input-container {
                    padding: 2rem;
                    background: hsl(var(--secondary-light) / 0.1);
                    border-radius: 1.5rem;
                    border: 1px solid hsl(var(--border));
                }
                .custom-input {
                    display: block;
                    width: 100%;
                    padding: 1rem 1.5rem;
                    background: white;
                    border: 1px solid hsl(var(--border));
                    border-radius: 1rem;
                    font-family: inherit;
                    transition: all 0.2s ease;
                }
                .custom-input:focus {
                    outline: none;
                    border-color: hsl(var(--primary));
                    box-shadow: 0 0 0 4px hsl(var(--primary-light) / 0.5);
                }
            `}</style>
        </div>
    );
});
LegacyInput.displayName = 'LegacyInput';

// --- React 19 Pattern (The New Way) ---
const ModernInput = ({ ref, ...props }) => {
    return (
        <div className="input-container modern">
            <span className="badge badge-primary" style={{ marginBottom: '1rem' }}>React 19</span>
            <input 
                ref={ref} 
                {...props} 
                className="custom-input modern-border"
                placeholder="ref as a prop! ✨"
            />
            <style>{`
                .modern {
                    background: hsl(var(--primary-light) / 0.1);
                    border-color: hsl(var(--primary-light));
                }
                .modern-border:focus {
                    border-color: hsl(var(--secondary));
                    box-shadow: 0 0 0 4px hsl(var(--secondary-light) / 0.5);
                }
            `}</style>
        </div>
    );
};

const RefComparison = () => {
    const legacyRef = useRef(null);
    const modernRef = useRef(null);

    const focusLegacy = () => legacyRef.current?.focus();
    const focusModern = () => modernRef.current?.focus();

    return (
        <div className="glass-effect" style={{
            padding: '3rem',
            borderRadius: '2.5rem',
            border: '1px solid hsl(var(--border))',
            boxShadow: 'var(--shadow-xl)',
            marginBottom: '4rem'
        }}>
            <h3 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '2rem', letterSpacing: '-0.02em' }}>
                Syntax Comparison
            </h3>
            
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '2rem'
            }}>
                <div>
                    <LegacyInput ref={legacyRef} />
                    <button 
                        onClick={focusLegacy}
                        className="btn btn-secondary"
                        style={{ marginTop: '1.5rem', width: '100%' }}
                    >
                        Focus Legacy Input
                    </button>
                </div>

                <div>
                    <ModernInput ref={modernRef} />
                    <button 
                        onClick={focusModern}
                        className="btn btn-primary"
                        style={{ marginTop: '1.5rem', width: '100%' }}
                    >
                        Focus Modern Input
                    </button>
                </div>
            </div>

            <div style={{ marginTop: '3rem', padding: '2rem', background: 'hsl(var(--background))', borderRadius: '1.5rem', border: '1px dashed hsl(var(--border))' }}>
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'hsl(var(--foreground) / 0.7)', lineHeight: '1.6' }}>
                    <strong>Note:</strong> In React 19, the <code>ref</code> prop is handled automatically. No more <code>forwardRef</code> wrapper or setting <code>displayName</code> for devtools!
                </p>
            </div>
        </div>
    );
};

export default RefComparison;
