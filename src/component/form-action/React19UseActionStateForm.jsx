import React, { useActionState, useState } from 'react';
import { react19UseActionStateCode } from './example/react19-use-action-state-code';
import { react19UseActionStateDocs } from './docs/react19-use-action-state-docs';
import React19UseActionStateDocsFooter from './docs/React19UseActionStateDocsFooter';
import CodeModal from '../common/CodeModal';

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

const React19UseActionStateForm = () => {
    const [state, formAction, isPending] = useActionState(submitAction, null);
    const [showCode, setShowCode] = useState(false);

    return (
        <>
            <div className="card h-100 shadow-sm border-dark">
                <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">React 19 useActionState</h5>
                    <div className="d-flex gap-2">
                        <button
                            className="btn btn-sm btn-light text-dark"
                            onClick={() => setShowCode(true)}
                            title="View Code"
                        >
                            View Code
                        </button>
                        <span className="badge bg-light text-dark d-flex align-items-center">Stateful</span>
                    </div>
                </div>

                <div className="card-body">
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

                        <button type="submit" className="btn btn-dark w-100" disabled={isPending}>
                            {isPending ? 'Submitting...' : 'Submit with State'}
                        </button>
                    </form>

                    {/* Display feedback based on returned state (Always visible if exists) */}
                    {state?.success && (
                        <div className="mt-4 p-3 bg-light rounded border border-success">
                            <h6 className="text-success mb-0">{state.success}</h6>
                        </div>
                    )}
                </div>

                <React19UseActionStateDocsFooter docs={react19UseActionStateDocs} />
            </div>

            <CodeModal
                show={showCode}
                onHide={() => setShowCode(false)}
                title="React 19 useActionState"
                code={react19UseActionStateCode}
            />
        </>
    );
};

export default React19UseActionStateForm;
