import React, { useState } from 'react';
import { react18ExampleCode } from './example/react18-code';
import { react18Docs } from './docs/react18-docs';
import DocsFooter from './docs/React18DocsFooter';
import CodeModal from '../common/CodeModal';

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
        <>
            <div className="card h-100 shadow-sm border-primary">
                <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">React 18 Form</h5>
                    <div className="d-flex gap-2">
                        <button
                            className="btn btn-sm btn-light text-primary"
                            onClick={() => setShowCode(true)}
                            title="Show Code"
                        >
                            View Code
                        </button>
                        <span className="badge bg-light text-primary d-flex align-items-center">Controlled</span>
                    </div>
                </div>

                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter name"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter email"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Submit (React 18)
                        </button>
                    </form>

                    {submittedData && (
                        <div className="mt-4 p-3 bg-light rounded border">
                            <h6 className="text-primary">Submitted Output:</h6>
                            <p className="mb-1"><strong>Name:</strong> {submittedData.name}</p>
                            <p className="mb-0"><strong>Email:</strong> {submittedData.email}</p>
                        </div>
                    )}
                </div>

                <DocsFooter docs={react18Docs} />
            </div>

            <CodeModal
                show={showCode}
                onHide={() => setShowCode(false)}
                title="React 18 Controlled Form"
                code={react18ExampleCode}
            />
        </>
    );
};

export default React18Form;
