import React from 'react';

const DocsFooter = ({ docs }) => {
    return (
        <div className="card-footer bg-light" style={{ fontSize: '0.9rem' }}>
            <h6 className="fw-bold mb-2">{docs.title}</h6>

            <div className="mb-2">
                <strong className="text-success">Pros:</strong>
                <ul className="ps-3 mb-1">
                    {docs.pros.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="mb-2">
                <strong className="text-danger">Cons:</strong>
                <ul className="ps-3 mb-1">
                    {docs.cons.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <div>
                <strong>{docs.usage.label}</strong>
                <p className="mb-0 text-muted">
                    {docs.usage.description}
                </p>
            </div>
        </div>
    );
};

export default DocsFooter;
