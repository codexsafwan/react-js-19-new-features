import React from 'react';
import MetaDataReact18 from '../component/metadata/MetaDataReact18';
import MetaDataReact19 from '../component/metadata/MetaDataReact19';
import MetaDataComparison from '../component/metadata/MetaDataComparison';

export default function MetaData() {
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
                Native <span style={{
                    background: 'linear-gradient(135deg, hsl(var(--secondary)), hsl(var(--primary)), hsl(var(--info)))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>Metadata</span>
            </h1>
            <p style={{
                fontSize: '1.25rem',
                color: 'hsl(var(--foreground) / 0.7)',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: '1.4',
                fontWeight: '400'
            }}>
                No more <code>react-helmet</code>. React 19 natively renders and hoists <code>&lt;title&gt;</code> and <code>&lt;meta&gt;</code> tags.
            </p>
        </header>

        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2.5rem',
            marginBottom: '8rem'
        }}>
            <MetaDataReact18 />
            <MetaDataReact19 />
            <div style={{ gridColumn: '1 / -1' }}>
                <MetaDataComparison />
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
}
