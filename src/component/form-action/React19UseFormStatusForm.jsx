import React, { useState } from 'react';
import { useFormState } from 'react-dom';
import { useFormStatus } from 'react-dom';
import { react19UseFormStatusCode } from './example/react19-use-form-status-code';
import { react19UseFormStatusDocs } from './docs/react19-use-form-status-docs';
import React19UseFormStatusDocsFooter from './docs/React19UseFormStatusDocsFooter';

// Define action (simulated server action)
const submitAction = async (previousState, formData) => {
    const name = formData.get('name');

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (!name || name.trim() === '') {
        return { error: 'Name is required' };
    }

    return { success: `Successfully registered ${name}!` };
};

// Child component strictly for useFormStatus
const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
        <button type="submit" className="btn btn-primary w-100" disabled={pending}>
            {pending ? (
                <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Submitting...
                </>
            ) : (
                'Submit with useFormStatus'
            )}
        </button>
    );
};

const React19UseFormStatusForm = () => {
    const [state, formAction] = useFormState(submitAction, null);
    const [showCode, setShowCode] = useState(false);

    return (
        <div className="card h-100 shadow-sm border-primary">
            <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                <h5 className="mb-0">React 19 useFormStatus</h5>
                <div className="d-flex gap-2">
                    <button
                        className="btn btn-sm btn-light text-primary"
                        onClick={() => setShowCode(!showCode)}
                        title="Toggle Code View"
                    >
                        {showCode ? 'Hide Code' : 'Show Code'}
                    </button>
                    <span className="badge bg-light text-primary d-flex align-items-center">Status</span>
                </div>
            </div>

            <div className="card-body">
                {showCode ? (
                    <div className="bg-dark text-white p-3 rounded mb-3 position-relative">
                        <pre className="mb-0 overflow-auto" style={{ fontSize: '0.85rem' }}>
                            <code>{react19UseFormStatusCode}</code>
                        </pre>
                    </div>
                ) : (
                    <form action={formAction}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                name="name"
                                className={`form-control ${state?.error ? 'is-invalid' : ''}`}
                                placeholder="Enter name"
                            />
                            {state?.error && <div className="invalid-feedback">{state.error}</div>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" name="email" className="form-control" placeholder="Enter email" />
                        </div>

                        {/* Must be a child component to use useFormStatus */}
                        <SubmitButton />
                    </form>
                )}

                {/* Display feedback based on returned state */}
                {state?.success && (
                    <div className="mt-4 p-3 bg-light rounded border border-success">
                        <h6 className="text-success mb-0">{state.success}</h6>
                    </div>
                )}
                {state?.error && showCode && (
                    <div className="mt-4 p-3 bg-light rounded border border-danger">
                        <h6 className="text-danger mb-0">Error: {state.error}</h6>
                    </div>
                )}
            </div>

            <React19UseFormStatusDocsFooter docs={react19UseFormStatusDocs} />
        </div>
    );
};

export default React19UseFormStatusForm;
