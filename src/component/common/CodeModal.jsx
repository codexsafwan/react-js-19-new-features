import React from 'react';
import { createPortal } from 'react-dom';

const CodeModal = ({ show, onHide, title, code }) => {
    React.useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [show]);

    if (!show) return null;

    const modalContent = (
        <div 
            className="modal-overlay" 
            style={{ 
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
                backdropFilter: 'blur(8px)',
                padding: '1.5rem'
            }}
            onClick={onHide}
        >
            <div 
                className="modal-container glass-effect shadow-2xl" 
                style={{ 
                    width: '100%',
                    maxWidth: '900px',
                    maxHeight: '90vh',
                    borderRadius: '2rem',
                    border: '1px solid hsl(var(--border))',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    background: 'hsl(var(--card))',
                    pointerEvents: 'auto'
                }}
                onClick={e => e.stopPropagation()}
            >
                <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid hsl(var(--border))', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h5 style={{ margin: 0, fontWeight: '800', fontSize: '1.25rem' }}>{title}</h5>
                    <button 
                        onClick={onHide}
                        style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'hsl(var(--foreground))', opacity: 0.5 }}
                    >×</button>
                </div>
                <div style={{ padding: '1.5rem', overflowY: 'auto', flexGrow: 1 }}>
                    <div style={{ background: '#0f172a', borderRadius: '1rem', padding: '1.5rem', boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)' }}>
                        <pre className="custom-scrollbar" style={{ margin: 0, color: '#e2e8f0', fontSize: '0.9rem', lineHeight: '1.6', overflowX: 'auto' }}>
                            <code>{code}</code>
                        </pre>
                    </div>
                </div>
                <div style={{ padding: '1.25rem 2rem', borderTop: '1px solid hsl(var(--border))', textAlign: 'right', background: 'hsl(var(--card))' }}>
                    <button 
                        className="premium-button" 
                        onClick={onHide}
                        style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}
                    >Close</button>
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
};

export default CodeModal;
