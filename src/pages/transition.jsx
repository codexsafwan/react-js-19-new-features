import React from 'react'
import BlockingExample from '../component/transition/BlockingExample'
import TransitionExample from '../component/transition/TransitionExample'
import AsyncTransitionExample from '../component/transition/AsyncTransitionExample'
import ConcurrentInfo from '../component/transition/ConcurrentInfo'

const TransitionPage = () => {
    return (
        <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '4rem 2rem',
            background: 'radial-gradient(circle at top right, hsl(var(--primary-light) / 0.5), transparent 40%), radial-gradient(circle at bottom left, hsl(var(--secondary-light) / 0.5), transparent 40%)',
            minHeight: '100vh'
        }}>
            <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <div className="badge badge-primary" style={{ marginBottom: '1rem', padding: '0.4rem 1.25rem', letterSpacing: '0.1em' }}>
                    CodexLab
                </div>
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                    fontWeight: '950',
                    marginBottom: '1rem',
                    letterSpacing: '-0.06em',
                    lineHeight: '0.9',
                    color: 'hsl(var(--foreground))'
                }}>
                    React 19 <span style={{
                        background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>Concurrent</span> Performance
                </h1>
                <p style={{
                    fontSize: '1.25rem',
                    color: 'hsl(var(--foreground) / 0.7)',
                    maxWidth: '800px',
                    margin: '0 auto',
                    lineHeight: '1.4',
                    fontWeight: '400'
                }}>
                    Experience how React 19 transforms UI responsiveness with optimized transition patterns.
                </p>
            </header>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '2.5rem',
                marginBottom: '8rem'
            }}>
                <BlockingExample />
                <TransitionExample />
                <AsyncTransitionExample />
                <ConcurrentInfo />
            </div>

            <section className="glass-effect" style={{
                borderRadius: '3rem',
                padding: '5rem',
                border: '1px solid hsl(var(--border))',
                boxShadow: 'var(--shadow-xl)',
                position: 'relative',
                overflow: 'hidden',
                background: 'rgba(255, 255, 255, 0.8)',
                marginTop: '10rem'
            }}>
                <div style={{ position: 'absolute', top: '0', right: '0', padding: '1rem' }}>
                    <span className="badge badge-primary">V19 GUIDE</span>
                </div>

                <h2 style={{ fontSize: '3rem', fontWeight: '950', marginBottom: '4rem', letterSpacing: '-0.04em', textAlign: 'center' }}>
                    React 18 vs React 19 <span style={{ color: 'hsl(var(--primary))' }}>Comparison</span>
                </h2>

                <div style={{ overflowX: 'auto', borderRadius: '2rem', border: '1px solid hsl(var(--border))', boxShadow: 'var(--shadow-lg)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', background: 'white' }}>
                        <thead>
                            <tr style={{ background: 'hsl(var(--primary-light) / 0.3)', borderBottom: '2px solid hsl(var(--border))' }}>
                                <th style={{ padding: '2rem', fontWeight: '900', color: 'hsl(var(--foreground))', fontSize: '1.1rem' }}>Feature</th>
                                <th style={{ padding: '2rem', fontWeight: '800', color: 'hsl(var(--foreground) / 0.7)', fontSize: '1rem' }}>React 18 Pattern</th>
                                <th style={{ padding: '2rem', fontWeight: '900', color: 'hsl(var(--primary))', fontSize: '1.1rem' }}>React 19 Pattern (New)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid hsl(var(--border))' }}>
                                <td style={{ padding: '1.5rem 2rem' }}>
                                    <div style={{ fontWeight: '800', marginBottom: '0.25rem' }}>Transition Scope</div>
                                    <div style={{ fontSize: '0.85rem', color: 'hsl(var(--foreground) / 0.5)' }}>What can be wrapped?</div>
                                </td>
                                <td style={{ padding: '1.5rem 2rem' }}>Synchronous state updates only.</td>
                                <td style={{ padding: '1.5rem 2rem', background: 'hsl(var(--primary-light) / 0.1)' }}>
                                    <strong>Async & Sync</strong>. Fully supports async actions and await.
                                </td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid hsl(var(--border))' }}>
                                <td style={{ padding: '1.5rem 2rem' }}>
                                    <div style={{ fontWeight: '800', marginBottom: '0.25rem' }}>Pending State</div>
                                    <div style={{ fontSize: '0.85rem', color: 'hsl(var(--foreground) / 0.5)' }}>Lifecycle management</div>
                                </td>
                                <td style={{ padding: '1.5rem 2rem' }}>Ends immediately after sync re-render.</td>
                                <td style={{ padding: '1.5rem 2rem', background: 'hsl(var(--primary-light) / 0.1)' }}>
                                    <strong>Extended</strong>. <code>isPending</code> stays true until async action resolves.
                                </td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid hsl(var(--border))' }}>
                                <td style={{ padding: '1.5rem 2rem' }}>
                                    <div style={{ fontWeight: '800', marginBottom: '0.25rem' }}>Server Actions</div>
                                    <div style={{ fontSize: '0.85rem', color: 'hsl(var(--foreground) / 0.5)' }}>Framework integration</div>
                                </td>
                                <td style={{ padding: '1.5rem 2rem' }}>Requires manual loading state management.</td>
                                <td style={{ padding: '1.5rem 2rem', background: 'hsl(var(--primary-light) / 0.1)' }}>
                                    <strong>Native</strong>. Automatically handles pending state for form actions.
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1.5rem 2rem' }}>
                                    <div style={{ fontWeight: '800', marginBottom: '0.25rem' }}>Developer UX</div>
                                    <div style={{ fontSize: '0.85rem', color: 'hsl(var(--foreground) / 0.5)' }}>Ease of implementation</div>
                                </td>
                                <td style={{ padding: '1.5rem 2rem' }}>Manual <code>setLoading</code> before fetching.</td>
                                <td style={{ padding: '1.5rem 2rem', background: 'hsl(var(--primary-light) / 0.1)' }}>
                                    <strong>"Wait for it"</strong>. Just wrap the async call in <code>startTransition</code>.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style={{
                    marginTop: '6rem', padding: '3rem', background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))', color: 'white',
                    borderRadius: '2rem', boxShadow: '0 20px 40px -10px hsl(var(--primary) / 0.4)',
                    display: 'flex', gap: '3rem', alignItems: 'center', position: 'relative', overflow: 'hidden'
                }}>
                    <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '100%', height: '200%', background: 'white', opacity: 0.1, transform: 'rotate(15deg)' }}></div>
                    <div style={{ fontSize: '4rem', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))', animation: 'float 3s ease-in-out infinite' }}>🚀</div>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h4 style={{ fontWeight: '900', fontSize: '1.75rem', marginBottom: '0.75rem' }}>The React 19 Advantage</h4>
                        <p style={{ fontSize: '1.1rem', opacity: 0.9, lineHeight: '1.6' }}>
                            By unifying <strong>Transitions</strong> and <strong>Actions</strong>, React 19 provides a single, cohesive way to handle all state changes while keeping the user experience perfectly fluid and responsive.
                        </p>
                    </div>
                </div>
            </section>

            <style>{`
                @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
                @media (max-width: 1100px) {
                  div[style*="gridTemplateColumns: repeat(2, 1fr)"] {
                    grid-template-columns: 1fr !important;
                  }
                }
                @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
            `}</style>
        </div>
    )
}


export default TransitionPage