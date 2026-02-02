import React, { useState } from 'react';
import { react18ExampleCode } from './example/react18-code';

const React18Form = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [submittedData, setSubmittedData] = useState(null);
    const [showCode, setShowCode] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('React 18 Form Data:', formData);
        setSubmittedData(formData);
    };

    return (
        <div className="card h-100 shadow-sm border-primary">
            <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                <h5 className="mb-0">React 18 Form</h5>
                <div className="d-flex gap-2">
                    <button
                        className="btn btn-sm btn-light text-primary"
                        onClick={() => setShowCode(!showCode)}
                        title="Toggle Code View"
                    >
                        {showCode ? 'Hide Code' : 'Show Code'}
                    </button>
                    <span className="badge bg-light text-primary d-flex align-items-center">Managed</span>
                </div>
            </div>

            <div className="card-body">
                {showCode ? (
                    <div className="bg-dark text-white p-3 rounded mb-3 position-relative">
                        <pre className="mb-0 overflow-auto" style={{ fontSize: '0.85rem' }}>
                            <code>{react18ExampleCode}</code>
                        </pre>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter name"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter email"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Submit (React 18)
                        </button>
                    </form>
                )}

                {/* Always show submitted data if it exists */}
                {submittedData && (
                    <div className="mt-4 p-3 bg-light rounded border">
                        <h6 className="text-primary">Submitted Output:</h6>
                        <p className="mb-1"><strong>Name:</strong> {submittedData.name}</p>
                        <p className="mb-0"><strong>Email:</strong> {submittedData.email}</p>
                    </div>
                )}
            </div>

            <div className="card-footer bg-light" style={{ fontSize: '0.9rem' }}>
                <h6 className="fw-bold mb-2">Why use React 18 Pattern?</h6>

                <div className="mb-2">
                    <strong className="text-success">Pros:</strong>
                    <ul className="ps-3 mb-1">
                        <li>Complete control over input values.</li>
                        <li>Instant feedback (e.g., character count, validation).</li>
                    </ul>
                </div>

                <div className="mb-2">
                    <strong className="text-danger">Cons:</strong>
                    <ul className="ps-3 mb-1">
                        <li>More boilerplate code (handlers, state).</li>
                        <li>Re-renders on every keystroke (perf issue on large forms).</li>
                    </ul>
                </div>

                <div>
                    <strong>When to use:</strong>
                    <p className="mb-0 text-muted">
                        Use when you need live validation (like password strength),
                        conditional fields, or integration with state managers.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default React18Form;
