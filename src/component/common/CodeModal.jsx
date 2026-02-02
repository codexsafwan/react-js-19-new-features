import React from 'react';

const CodeModal = ({ show, onHide, title, code }) => {
    // If not showing, render nothing (Bootstrap handled via classes usually, but react props help)
    // Bootstrap modal usually needs detailed structure.
    // We will use standard Bootstrap modal classes.

    if (!show) return null;

    return (
        <>
            <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{title}</h5>
                            <button type="button" className="btn-close" onClick={onHide} aria-label="Close"></button>
                        </div>
                        <div className="modal-body bg-dark">
                            <pre className="text-white mb-0 p-2 overflow-auto" style={{ maxHeight: '60vh' }}>
                                <code>{code}</code>
                            </pre>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onHide}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Backdrop is handled by the style above for simplicity in raw bootstrap without JS lib */}
        </>
    );
};

export default CodeModal;
