import React from 'react';

const OptimisticComparison = () => {
    return (
        <div className="card h-100 shadow-sm border-info">
            <div className="card-header bg-info text-white">
                <h5 className="mb-0">Understanding Optimistic UI</h5>
                <small>Comparison & Strategy</small>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-sm table-bordered table-hover" style={{ fontSize: '0.85rem' }}>
                        <thead className="table-light">
                            <tr>
                                <th>Feature</th>
                                <th>React 18 (Manual)</th>
                                <th>React 19 (Native)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="fw-bold text-dark">Local State</td>
                                <td>Managed via <code>useState</code></td>
                                <td>Managed via <code>useOptimistic</code></td>
                            </tr>
                            <tr>
                                <td className="fw-bold text-dark">Rollback</td>
                                <td className="text-danger">Manual cleanups (try/catch)</td>
                                <td className="text-success">Automatic</td>
                            </tr>
                            <tr>
                                <td className="fw-bold text-dark">Complexity</td>
                                <td>High (Logic mixed with UI)</td>
                                <td>Low (Logic separated)</td>
                            </tr>
                            <tr>
                                <td className="fw-bold text-dark">Server Actions</td>
                                <td>Compatible (Standard)</td>
                                <td>Highly Recommended</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <hr className="my-3" />

                <h6 className="text-info mb-3">Why use Optimistic UI?</h6>

                <div className="accordion accordion-flush" id="optimisticAccordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed py-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOpt1">
                                <small><strong>1. Perceived Performance</strong></small>
                            </button>
                        </h2>
                        <div id="flush-collapseOpt1" className="accordion-collapse collapse" data-bs-parent="#optimisticAccordion">
                            <div className="accordion-body small text-muted">
                                Apps feel <em>instant</em>. Users don't wait for server round-trips to see their actions reflected on screen (e.g., "liking" a post).
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed py-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOpt2">
                                <small><strong>2. React 19 Advantage</strong></small>
                            </button>
                        </h2>
                        <div id="flush-collapseOpt2" className="accordion-collapse collapse" data-bs-parent="#optimisticAccordion">
                            <div className="accordion-body small text-muted">
                                <code>useOptimistic</code> handles the dirty work. It automatically switches between the temporary optimistic state and the final server source of truth without flickering or complex effect chains.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <div className="card-footer bg-light" style={{ fontSize: '0.8rem' }}>
                <strong>Recommendation:</strong> Use <code>useOptimistic</code> whenever you have a Server Action (or async transition) that updates the UI.
            </div>
        </div>
    );
};

export default OptimisticComparison;
