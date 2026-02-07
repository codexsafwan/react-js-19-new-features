import React from 'react';

const MetaDataComparison = () => {
    return (
        <div className="card h-100 shadow-sm border-info">
            <div className="card-header bg-info text-white">
                <h5 className="mb-0">Understanding Metadata Hoisting</h5>
                <small>Why Native Support Matters</small>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-sm table-bordered table-hover" style={{ fontSize: '0.85rem' }}>
                        <thead className="table-light">
                            <tr>
                                <th>Feature</th>
                                <th>React 18 (Helmet)</th>
                                <th>React 19 (Native)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="fw-bold text-dark">Dependencies</td>
                                <td className="text-danger">External Lib Required</td>
                                <td className="text-success">Zero Dependencies</td>
                            </tr>
                            <tr>
                                <td className="fw-bold text-dark">Placement</td>
                                <td>Specific Wrapper</td>
                                <td>Anywhere in JSX</td>
                            </tr>
                            <tr>
                                <td className="fw-bold text-dark">Streaming SSR</td>
                                <td>Difficult / Hacky</td>
                                <td className="text-success">Supported Out-of-Box</td>
                            </tr>
                             <tr>
                                <td className="fw-bold text-dark">Deduplication</td>
                                <td>Lib handled</td>
                                <td>Auto-handled by React</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <hr className="my-3" />

                <h6 className="text-info mb-3">Key Concepts</h6>

                <div className="accordion accordion-flush" id="metadataAccordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed py-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseMeta1">
                                <small><strong>What is Hoisting?</strong></small>
                            </button>
                        </h2>
                        <div id="flush-collapseMeta1" className="accordion-collapse collapse" data-bs-parent="#metadataAccordion">
                            <div className="accordion-body small text-muted">
                                React 19 detects <code>&lt;title&gt;</code>, <code>&lt;meta&gt;</code>, and <code>&lt;link&gt;</code> tags anywhere in your component tree and automatically moves (hoists) them to the HTML <code>&lt;head&gt;</code> section during rendering. You don't need a portal or a special library anymore.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed py-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseMeta2">
                                <small><strong>When to use this?</strong></small>
                            </button>
                        </h2>
                        <div id="flush-collapseMeta2" className="accordion-collapse collapse" data-bs-parent="#metadataAccordion">
                            <div className="accordion-body small text-muted">
                                Always! For SEO tags, page titles, canonical links, and even loading stylesheets/scripts. It's especially powerful when used locally in a component—for example, a blog post component can render its own metadata without needing to pass props all the way up to a root layout.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <div className="card-footer bg-light" style={{ fontSize: '0.8rem' }}>
                <strong>Recommendation:</strong> Remove <code>react-helmet</code> and use native tags for all new React 19 projects.
            </div>
        </div>
    );
};

export default MetaDataComparison;
