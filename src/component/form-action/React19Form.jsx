import React, { useState } from 'react';
import { react19ExampleCode } from './example/react19-code';
import { react19Docs } from './docs/react19-docs';
import React19DocsFooter from './docs/React19DocsFooter';

const React19Form = () => {
    const [submittedData, setSubmittedData] = useState(null);
    const [showCode, setShowCode] = useState(false);

    // React 19 Action Function
    const handleAction = (formData) => {
        const name = formData.get('name');
        const email = formData.get('email');
        console.log('React 19 Action Data:', { name, email });

        // Update local state to show result on screen
        setSubmittedData({ name, email });
    };

    return (
        <div className="card h-100 shadow-sm border-success">
            <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
                <h5 className="mb-0">React 19 Form</h5>
                <div className="d-flex gap-2">
                    <button
                        className="btn btn-sm btn-light text-success"
                        onClick={() => setShowCode(!showCode)}
                        title="Toggle Code View"
                    >
                        {showCode ? 'Hide Code' : 'Show Code'}
                    </button>
                    <span className="badge bg-light text-success d-flex align-items-center">Action</span>
                </div>
            </div>

            <div className="card-body">
                {showCode ? (
                    <div className="bg-dark text-white p-3 rounded mb-3 position-relative">
                        <pre className="mb-0 overflow-auto" style={{ fontSize: '0.85rem' }}>
                            <code>{react19ExampleCode}</code>
                        </pre>
                    </div>
                ) : (
                    <form action={handleAction}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                name="name"
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
                                className="form-control"
                                placeholder="Enter email"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-success w-100">
                            Submit (React 19)
                        </button>
                    </form>
                )}

                {/* Always show submitted data if it exists */}
                {submittedData && (
                    <div className="mt-4 p-3 bg-light rounded border">
                        <h6 className="text-success">Submitted Output:</h6>
                        <p className="mb-1"><strong>Name:</strong> {submittedData.name}</p>
                        <p className="mb-0"><strong>Email:</strong> {submittedData.email}</p>
                    </div>
                )}
            </div>

            <React19DocsFooter docs={react19Docs} />
        </div>
    );
};

export default React19Form;
