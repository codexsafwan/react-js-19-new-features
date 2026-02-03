import { createContext, use, useState } from "react";
import CodeModal from "../common/CodeModal";
import LessonHeader from "./code-view/LessonHeader";
import { lesson04Header } from "./code-view/headerContent";
import { contextSimplifiedCode } from "./examples/codeSnippets";
import EducationSection from "./education/EducationSection";
import { lesson04Education } from "./education/educationContent";

const StatusContext = createContext('Stable');

function StatusDisplay() {
    const status = use(StatusContext);
    return (
        <div className="alert alert-success py-2 px-3 mb-0">
            <div className="d-flex align-items-center gap-2">
                <span className={`badge rounded-pill ${status === 'Stable' ? 'bg-success' : 'bg-warning'}`}>●</span>
                <div>
                    <small className="text-muted text-uppercase" style={{fontSize: '10px'}}>Status</small>
                    <h6 className="mb-0 fw-bold">{status}</h6>
                </div>
            </div>
        </div>
    );
}

export default function ContextSimplifiedExample() {
    const [status, setStatus] = useState('Stable');
    const [showCode, setShowCode] = useState(false);

    return (
        <div className="card shadow-sm">
            <LessonHeader data={lesson04Header} onViewCode={() => setShowCode(true)} />

            <div className="card-body py-2 px-3">
                <div className="alert alert-info py-1 px-2 mb-2">
                    <small style={{fontSize: '11px'}}><strong>Key:</strong> <code>use()</code> reads multiple contexts.</small>
                </div>
                <StatusContext.Provider value={status}>
                    <StatusDisplay />
                </StatusContext.Provider>
            </div>

            <div className="card-footer py-2 px-3 bg-white">
                <button onClick={() => setStatus(s => s === 'Stable' ? 'Updating' : 'Stable')} className="btn btn-primary btn-sm w-100">
                    Toggle Status
                </button>
            </div>

            <EducationSection data={lesson04Education} />

            <CodeModal show={showCode} onHide={() => setShowCode(false)} title="Lesson 04" code={contextSimplifiedCode} />
        </div>
    );
}
