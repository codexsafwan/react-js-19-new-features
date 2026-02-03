import React from 'react';

const ConcurrentInfo = () => {
    return (
        <div className="premium-card animate-fade-in flex flex-col h-full" style={{
            background: 'linear-gradient(135deg, hsl(var(--secondary-light)), hsl(var(--primary-light)))',
            borderColor: 'hsl(var(--secondary) / 0.1)'
        }}>
            <div className="badge badge-primary" style={{ alignSelf: 'start', marginBottom: '1.5rem' }}>
                Key Concept
            </div>

            <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem', letterSpacing: '-0.025em' }}>
                Why Transitions?
            </h2>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: 1 }}>
                <li style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem' }}>
                    <span style={{ color: 'hsl(var(--success))' }}>✓</span>
                    <span><strong>Interruption:</strong> High-priority updates like typing interrupt low-priority renders.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem' }}>
                    <span style={{ color: 'hsl(var(--success))' }}>✓</span>
                    <span><strong>Concurrency:</strong> React works on multiple versions of the UI in memory simultaneously.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem' }}>
                    <span style={{ color: 'hsl(var(--success))' }}>✓</span>
                    <span><strong>Stale UI:</strong> Users see the old UI during transitions instead of blank loading screens.</span>
                </li>
            </ul>

            <div style={{ marginTop: '2rem', padding: '1rem', background: 'white', borderRadius: '0.75rem', border: '1px solid hsl(var(--border))' }}>
                <p style={{ fontSize: '0.75rem', color: 'hsl(var(--foreground) / 0.6)', fontStyle: 'italic' }}>
                    "Transitions are the cornerstone of a fluid web experience in modern React."
                </p>
            </div>
        </div>
    );
};

export default ConcurrentInfo;
