import React from 'react';

const FormComparison = () => {
    return (
        <div className="card h-100 shadow-sm border-info">
            <div className="card-header bg-info text-white">
                <h5 className="mb-0">Comparison Guide</h5>
                <small>Quick Reference</small>
            </div>
            <div className="card-body">
                {/* 1. Simple Table (Restored) */}
                <div className="table-responsive">
                    <table className="table table-sm table-bordered table-hover" style={{ fontSize: '0.85rem' }}>
                        <thead className="table-light">
                            <tr>
                                <th>Pattern</th>
                                <th>Best For...</th>
                                <th>Key Feature</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="fw-bold text-primary">React 18</td>
                                <td>Live validation, complex logic</td>
                                <td><code>useState</code> + <code>onChange</code></td>
                            </tr>
                            <tr>
                                <td className="fw-bold text-success">React 19 (Simple)</td>
                                <td>Simple submissions</td>
                                <td><code>action={"{fn}"}</code></td>
                            </tr>
                            <tr>
                                <td className="fw-bold text-dark">useFormState</td>
                                <td>Server results (Success/Error)</td>
                                <td>Return values</td>
                            </tr>
                            <tr>
                                <td className="fw-bold text-primary">useFormStatus</td>
                                <td>Loading states (Buttons)</td>
                                <td><code>pending</code> status</td>
                            </tr>
                            <tr>
                                <td className="fw-bold text-dark">useActionState</td>
                                <td>Full form management</td>
                                <td>State + Pending + Result</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* 2. Detailed Description / Notes (Added) */}
                <hr className="my-3" />

                <h6 className="text-info mb-3">Which one fits your project?</h6>

                <div className="accordion accordion-flush" id="comparisonAccordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed py-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne">
                                <small><strong>1. Legacy / Client-Heavy Apps (React 18)</strong></small>
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#comparisonAccordion">
                            <div className="accordion-body small text-muted">
                                Use the <strong>React 18 Controlled</strong> pattern if you are migrating an older app or need <em>instant</em> client-side feedback (like a password strength meter that updates on every keystroke) before hitting the server.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed py-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo">
                                <small><strong>2. Static Sites / Landing Pages (React 19 Simple)</strong></small>
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#comparisonAccordion">
                            <div className="accordion-body small text-muted">
                                Perfect for "Contact Us" forms or newsletter signups where you just need to send data and don't need complex state management.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed py-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree">
                                <small><strong>3. Modern Next.js / Server Actions (useActionState)</strong></small>
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse show" data-bs-parent="#comparisonAccordion">
                            <div className="accordion-body small text-muted">
                                <strong>The Gold Standard.</strong> Use <code>useActionState</code> (or the older <code>useFormState</code>) for 90% of your modern forms. It handles loading states, error messages from the server, and progressive enhancement automatically.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="card-footer bg-light" style={{ fontSize: '0.8rem' }}>
                <strong>Recommendation:</strong> Start with <code>useActionState</code> for new features.
            </div>
        </div>
    );
};

export default FormComparison;
