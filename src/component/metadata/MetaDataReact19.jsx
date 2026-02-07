import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { react19MetaCode } from "./example/react19-code";
import { react19MetaDocs } from "./docs/metadata-docs";
import DocsFooter from "../form-action/docs/React18DocsFooter";
import CodeModal from "../common/CodeModal";

const MetaDataReact19 = () => {
  const [showCode, setShowCode] = useState(false);

  return (
    <>
      {/* NATIVE METADATA SUPPORT DEMO */}
      <title>React 19 Metadata | Codex</title>
      <meta name="description" content="This description was injected natively by React 19!" />
      <meta name="keywords" content="react, metadata, hoisting, codex" />

      <div className="card h-100 shadow-sm border-success">
        <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">React 19: Native</h5>
          <div className="d-flex gap-2">
            <button
              className="btn btn-sm btn-light text-success"
              onClick={() => setShowCode(true)}
              title="Show Code"
            >
              View Code
            </button>
            <span className="badge bg-light text-success d-flex align-items-center">
              Native Support
            </span>
          </div>
        </div>

        <div className="card-body">
           <div className="alert alert-success bg-opacity-10 mb-3">
             <h6 className="text-success mb-2">🎉 It Just Works!</h6>
             <p className="small text-muted mb-0">
               Check your browser tab title! It should say <strong>"React 19 Metadata | Codex"</strong>. 
               This was rendered directly inside this component but hoisted to the <code>&lt;head&gt;</code> automatically.
             </p>
           </div>
           
           <div className="p-3 bg-light rounded border">
              <h6>Current Page Metadata:</h6>
              <ul className="list-unstyled small mb-0">
                <li className="mb-1"><strong>Title:</strong> React 19 Metadata | Codex</li>
                <li className="mb-1"><strong>Desc:</strong> This description was injected natively by React 19!</li>
              </ul>
           </div>
        </div>

        <DocsFooter docs={react19MetaDocs} />
      </div>

      <CodeModal
        show={showCode}
        onHide={() => setShowCode(false)}
        title="React 19 Metadata"
        code={react19MetaCode}
      />
    </>
  );
};

export default MetaDataReact19;
