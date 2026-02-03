import { memo } from "react";

const SlowList = memo(function SlowList({ text }) {
    // Artificial slow down: 1ms per item * 200 items = 200ms per render
    console.log('[SlowList] Rendering 200 items...');
    // eslint-disable-next-line react-hooks/purity
    let startTime = performance.now();
    // eslint-disable-next-line react-hooks/purity
    while (performance.now() - startTime < 200) {
        // Do nothing for 200 ms to emulate slow code
    }

    const items = [];
    for (let i = 0; i < 60; i++) {
        items.push(<li key={i} className="slow-list-item">Item {i}: {text}</li>);
    }

    return (
        <div className="slow-list-container" style={{
            minHeight: '300px',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <h3 className="text-sm font-semibold mb-3 text-secondary" style={{ color: 'hsl(var(--secondary))', fontSize: '0.75rem' }}>
                Concurrent Rendering (Slow Work)
            </h3>
            <div style={{
                overflowY: 'auto',
                maxHeight: '400px',
                paddingRight: '0.5rem',
                flexGrow: 1
            }}>
                <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', listStyle: 'none' }}>
                    {items}
                </ul>
            </div>
        </div>
    );
});


export default SlowList;
