import React from 'react';
import CommentReact19 from '../component/optimistic/CommentReact19';
import CommentReact18 from '../component/optimistic/CommentReact18';
import OptimisticComparison from '../component/optimistic/OptimisticComparison';

const OptimisticPage = () => {
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
                    Optimistic <span style={{
                        background: 'linear-gradient(135deg, hsl(var(--success)), hsl(var(--primary)), hsl(var(--info)))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>UI Updates</span>
                </h1>
                <p style={{
                    fontSize: '1.25rem',
                    color: 'hsl(var(--foreground) / 0.7)',
                    maxWidth: '800px',
                    margin: '0 auto',
                    lineHeight: '1.4',
                    fontWeight: '400'
                }}>
                    Native support for optimistic UI updates in React 19 using the new <code>useOptimistic</code> hook.
                </p>
            </header>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '2.5rem',
                marginBottom: '8rem'
            }}>
                <CommentReact18 />
                <CommentReact19 />
                <div style={{ gridColumn: '1 / -1' }}>
                    <OptimisticComparison />
                </div>
            </div>

            <style>{`
                @media (max-width: 1100px) {
                    div[style*="gridTemplateColumns: repeat(2, 1fr)"] {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default OptimisticPage;