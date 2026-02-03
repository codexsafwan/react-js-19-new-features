import { use, useState, Suspense } from "react";
import CodeModal from "../common/CodeModal";
import LessonHeader from "./code-view/LessonHeader";
import { lesson01Header } from "./code-view/headerContent";
import { useFetchCode } from "./examples/codeSnippets";
import EducationSection from "./education/EducationSection";
import { lesson01Education } from "./education/educationContent";

const fetchMessage = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ 
            text: "Success: Data fetched declaratively!", 
            timestamp: new Date().toLocaleTimeString(),
            id: Math.random().toString(36).substr(2, 9).toUpperCase(),
        }), 1500);
    });
};

let messagePromise = fetchMessage();

function Message({ messagePromise }) {
    const message = use(messagePromise);
    return (
        <div className="alert alert-success py-2 px-3 mb-0">
            <div className="d-flex align-items-center gap-2 mb-1">
                <span className="badge bg-success">Success</span>
            </div>
            <p className="mb-1 small fw-medium">{message.text}</p>
            <small className="text-muted" style={{fontSize: '11px'}}>
                <strong>ID:</strong> {message.id} | <strong>Time:</strong> {message.timestamp}
            </small>
        </div>
    );
}

function LoadingState() {
    return (
        <div className="alert alert-secondary py-2 px-3 mb-0">
            <div className="d-flex align-items-center gap-2 mb-1">
                <div className="spinner-border spinner-border-sm text-primary" role="status"></div>
                <span className="badge bg-primary">Loading</span>
            </div>
            <div className="placeholder-glow">
                <span className="placeholder col-8"></span>
            </div>
        </div>
    );
}

export default function UseFetchExample() {
    const [refreshKey, setRefreshKey] = useState(0);
    const [showCode, setShowCode] = useState(false);

    const handleRefresh = () => {
        messagePromise = fetchMessage();
        setRefreshKey(prev => prev + 1);
    };

    return (
        <div className="card shadow-sm">
            <LessonHeader data={lesson01Header} onViewCode={() => setShowCode(true)} />

            <div className="card-body py-2 px-3">
                <div className="alert alert-info py-1 px-2 mb-2">
                    <small style={{fontSize: '11px'}}><strong>Key:</strong> <code>use()</code> reads promises directly.</small>
                </div>
                <Suspense fallback={<LoadingState />}>
                    <Message key={refreshKey} messagePromise={messagePromise} />
                </Suspense>
            </div>

            <div className="card-footer py-2 px-3 bg-white">
                <button onClick={handleRefresh} className="btn btn-primary btn-sm w-100">
                    Refetch Data
                </button>
            </div>

            <EducationSection data={lesson01Education} />

            <CodeModal show={showCode} onHide={() => setShowCode(false)} title="Lesson 01" code={useFetchCode} />
        </div>
    );
}
