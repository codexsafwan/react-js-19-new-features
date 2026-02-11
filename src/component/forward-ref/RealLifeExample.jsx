import React, { useRef, useState } from 'react';

const SearchInput = ({ ref, label, onSearch }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: '700', color: 'hsl(var(--foreground) / 0.6)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {label}
            </label>
            <div style={{ position: 'relative' }}>
                <input
                    ref={ref}
                    type="text"
                    onChange={(e) => onSearch(e.target.value)}
                    placeholder="Search components..."
                    style={{
                        width: '100%',
                        padding: '1.25rem 1.5rem',
                        paddingLeft: '3.5rem',
                        borderRadius: '1.25rem',
                        border: '2px solid hsl(var(--border))',
                        backgroundColor: 'white',
                        fontSize: '1rem',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
                    }}
                    className="focus-ring"
                />
                <span style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.4 }}>
                    🔍
                </span>
            </div>
            <style>{`
                .focus-ring:focus {
                    outline: none;
                    border-color: hsl(var(--primary));
                    box-shadow: 0 0 0 4px hsl(var(--primary-light) / 0.5), var(--shadow-md) !important;
                    transform: translateY(-1px);
                }
            `}</style>
        </div>
    );
};

const RealLifeExample = () => {
    const searchRef = useRef(null);
    const [query, setQuery] = useState('');

    const handleQuickFocus = () => {
        searchRef.current?.focus();
        // Visual feedback for focus
        searchRef.current.style.borderColor = 'hsl(var(--secondary))';
        setTimeout(() => {
            if (searchRef.current) searchRef.current.style.borderColor = '';
        }, 1000);
    };

    return (
        <section className="glass-effect" style={{
            padding: '4rem',
            borderRadius: '3rem',
            border: '1px solid hsl(var(--border))',
            background: 'linear-gradient(to bottom right, rgba(255,255,255,0.9), rgba(255,255,255,0.5))',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}>
                <span className="badge badge-secondary">Real Life Scenario</span>
            </div>

            <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                <h3 style={{ fontSize: '2.5rem', fontWeight: '950', marginBottom: '1.5rem', letterSpacing: '-0.04em' }}>
                    Focus Management
                </h3>
                <p style={{ color: 'hsl(var(--foreground) / 0.6)', marginBottom: '3rem', lineHeight: '1.7' }}>
                    In complex UIs, you often need to trigger actions on child elements from the parent. 
                    React 19 makes this seamless by letting you pass <code>ref</code> just like any other prop.
                </p>

                <div style={{ 
                    background: 'white', 
                    padding: '2.5rem', 
                    borderRadius: '2rem', 
                    boxShadow: 'var(--shadow-xl)',
                    border: '1px solid hsl(var(--border))'
                }}>
                    <SearchInput 
                        ref={searchRef} 
                        label="Quick Navigation" 
                        onSearch={setQuery}
                    />
                    
                    <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <button 
                            onClick={handleQuickFocus}
                            className="btn btn-primary"
                            style={{ padding: '0.75rem 2rem' }}
                        >
                            Focus Input (Ctrl + K)
                        </button>
                        <div style={{ 
                            padding: '0.75rem 1.5rem', 
                            background: 'hsl(var(--background))', 
                            borderRadius: '1rem',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            color: 'hsl(var(--primary))',
                            border: '1px solid hsl(var(--primary-light))'
                        }}>
                             Query: "{query || '...'}"
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                {[
                    { title: 'Cleaner Boilerplate', text: 'No need for React.forwardRef() wrapping.' },
                    { title: 'DevTools Friendly', text: 'Uses function name automatically.' },
                    { title: 'HOC Compatible', text: 'Prop-based ref passing breaks fewer patterns.' }
                ].map((item, idx) => (
                    <div key={idx} style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.4)', borderRadius: '1.5rem', border: '1px solid white' }}>
                        <div style={{ fontWeight: '800', marginBottom: '0.5rem', color: 'hsl(var(--foreground))' }}>{item.title}</div>
                        <div style={{ fontSize: '0.85rem', color: 'hsl(var(--foreground) / 0.6)', lineHeight: '1.5' }}>{item.text}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RealLifeExample;
