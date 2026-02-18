import React from 'react'
import PageHeader from '../component/common/PageHeader'
import RefComparison from '../component/forward-ref/RefComparison'
import RealLifeExample from '../component/forward-ref/RealLifeExample'

const ForwardRefPage = () => {
    return (
        <>
            <PageHeader 
                title="React 19 forwardRef" 
                description="Refs are now props. No more forwardRef wrapper needed for functional components." 
            />

            <section style={{ marginBottom: '8rem' }}>
                <RefComparison />
            </section>

            <section className="glass-effect" style={{
                borderRadius: '3rem',
                padding: '5rem',
                border: '1px solid hsl(var(--border))',
                boxShadow: 'var(--shadow-xl)',
                position: 'relative',
                overflow: 'hidden',
                background: 'rgba(255, 255, 255, 0.8)',
                marginBottom: '8rem'
            }}>
                <div style={{ position: 'absolute', top: '0', right: '0', padding: '1rem' }}>
                    <span className="badge badge-primary">EVOLUTION</span>
                </div>

                <h2 style={{ fontSize: '3rem', fontWeight: '950', marginBottom: '4rem', letterSpacing: '-0.04em', textAlign: 'center' }}>
                    What Changed in <span style={{ color: 'hsl(var(--primary))' }}>React 19</span>?
                </h2>

                <div style={{ overflowX: 'auto', borderRadius: '2rem', border: '1px solid hsl(var(--border))', boxShadow: 'var(--shadow-lg)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', background: 'white' }}>
                        <thead>
                            <tr style={{ background: 'hsl(var(--primary-light) / 0.3)', borderBottom: '2px solid hsl(var(--border))' }}>
                                <th style={{ padding: '2rem', fontWeight: '900', color: 'hsl(var(--foreground))', fontSize: '1.1rem' }}>Comparison</th>
                                <th style={{ padding: '2rem', fontWeight: '800', color: 'hsl(var(--foreground) / 0.7)', fontSize: '1rem' }}>React 18 (Legacy)</th>
                                <th style={{ padding: '2rem', fontWeight: '900', color: 'hsl(var(--primary))', fontSize: '1.1rem' }}>React 19 (Modern)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid hsl(var(--border))' }}>
                                <td style={{ padding: '1.5rem 2rem' }}>
                                    <div style={{ fontWeight: '800', marginBottom: '0.25rem' }}>Implementation</div>
                                    <div style={{ fontSize: '0.85rem', color: 'hsl(var(--foreground) / 0.5)' }}>How to define?</div>
                                </td>
                                <td style={{ padding: '1.5rem 2rem' }}>Wrapped in <code>forwardRef((props, ref) =&gt; ...)</code></td>
                                <td style={{ padding: '1.5rem 2rem', background: 'hsl(var(--primary-light) / 0.1)' }}>
                                    <strong>Automatic</strong>. <code>ref</code> is just a prop.
                                </td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid hsl(var(--border))' }}>
                                <td style={{ padding: '1.5rem 2rem' }}>
                                    <div style={{ fontWeight: '800', marginBottom: '0.25rem' }}>Boilerplate</div>
                                    <div style={{ fontSize: '0.85rem', color: 'hsl(var(--foreground) / 0.5)' }}>Extra code?</div>
                                </td>
                                <td style={{ padding: '1.5rem 2rem' }}>High. Requires wrapper and often <code>displayName</code>.</td>
                                <td style={{ padding: '1.5rem 2rem', background: 'hsl(var(--primary-light) / 0.1)' }}>
                                    <strong>Zero</strong>. Standard functional component syntax.
                                </td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid hsl(var(--border))' }}>
                                <td style={{ padding: '1.5rem 2rem' }}>
                                    <div style={{ fontWeight: '800', marginBottom: '0.25rem' }}>DevTools</div>
                                    <div style={{ fontSize: '0.85rem', color: 'hsl(var(--foreground) / 0.5)' }}>Debugging experience</div>
                                </td>
                                <td style={{ padding: '1.5rem 2rem' }}>Shows as <code>ForwardRef(...)</code> unless named.</td>
                                <td style={{ padding: '1.5rem 2rem', background: 'hsl(var(--primary-light) / 0.1)' }}>
                                    <strong>Native</strong>. Shows the actual component name.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <RealLifeExample />

            <div style={{
                marginTop: '6rem', padding: '3rem', background: 'linear-gradient(135deg, hsl(var(--secondary)), hsl(var(--primary)))', color: 'white',
                borderRadius: '2rem', boxShadow: '0 20px 40px -10px hsl(var(--secondary) / 0.4)',
                display: 'flex', gap: '3rem', alignItems: 'center', position: 'relative', overflow: 'hidden'
            }}>
                <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '100%', height: '200%', background: 'white', opacity: 0.1, transform: 'rotate(15deg)' }}></div>
                <div style={{ fontSize: '4rem', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }}>🎯</div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <h4 style={{ fontWeight: '900', fontSize: '1.75rem', marginBottom: '0.75rem' }}>Simplify Your Code</h4>
                    <p style={{ fontSize: '1.1rem', opacity: 0.9, lineHeight: '1.6' }}>
                        React 19 removes the mental hurdle of "when to use forwardRef". By treating refs as standard props, the API becomes more intuitive and consistent with how other data flows through your components.
                    </p>
                </div>
            </div>
        </>
    )
}

export default ForwardRefPage