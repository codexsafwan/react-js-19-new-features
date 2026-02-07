import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { react18MetaCode } from "./example/react18-code";
import { react18MetaDocs } from "./docs/metadata-docs";
import DocsFooter from "../form-action/docs/React18DocsFooter";
import CodeModal from "../common/CodeModal";

const MetaDataReact18 = () => {
  const [showCode, setShowCode] = useState(false);

  return (
    <>
      <div className="card h-100 shadow-sm border-primary">
        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">React 18: Libraries</h5>
          <div className="d-flex gap-2">
            <button
              className="btn btn-sm btn-light text-primary"
              onClick={() => setShowCode(true)}
              title="Show Code"
            >
              View Code
            </button>
            <span className="badge bg-light text-primary d-flex align-items-center">
              External Lib
            </span>
          </div>
        </div>

        <div className="card-body">
          <div className="alert alert-light border-primary mb-3">
            <h6 className="text-primary mb-2"> <i className="bi bi-info-circle-fill me-2"></i>Legacy Approach</h6>
            <p className="small text-muted mb-0">
              Metadata tags were typically managed by external libraries like <code>react-helmet</code>. These libraries had to manually inject tags into the DOM, which could lead to hydration mismatches and bundle overhead.
            </p>
          </div>

          <div className="bg-light p-3 rounded text-center text-muted" style={{borderStyle: 'dashed', borderWidth: '2px'}}>
             <em>Visual Representation Only</em><br/>
             (No actual metadata injected in this demo to avoid conflicts)
          </div>
        </div>

        <DocsFooter docs={react18MetaDocs} />
      </div>

      <CodeModal
        show={showCode}
        onHide={() => setShowCode(false)}
        title="React 18 Metadata (Mock)"
        code={react18MetaCode}
      />
    </>
  );
};

export default MetaDataReact18;
