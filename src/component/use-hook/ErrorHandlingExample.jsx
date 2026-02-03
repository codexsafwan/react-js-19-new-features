import { use, useState, Suspense, Component } from "react";
import CodeModal from "../common/CodeModal";
import LessonHeader from "./code-view/LessonHeader";
import { lesson03Header } from "./code-view/headerContent";
import { errorHandlingCode } from "./examples/codeSnippets";
import EducationSection from "./education/EducationSection";
import { lesson03Education } from "./education/educationContent";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    render() {
        if (this.state.hasError) return this.props.fallback(this.state.error);
        return this.props.children;
    }
}

const fetchResource = (shouldFail) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) reject(new Error("Network request failed"));
            else resolve("Resource loaded successfully!");
        }, 1000);
    });
};

function Resource({ promise }) {
    const data = use(promise);
    return (
        <div className="alert alert-success py-2 px-3 mb-0">
            <div className="d-flex align-items-center gap-2 mb-1">
                <span>✅</span>
                <span className="badge bg-success">Success</span>
            </div>
            <p className="mb-0 small fw-medium">{data}</p>
        </div>
    );
}

function LoadingState() {
    return (
        <div className="alert alert-secondary py-2 px-3 mb-0 text-center">
            <div className="spinner-border spinner-border-sm me-2" role="status"></div>
            <small>Loading...</small>
        </div>
    );
}

function ErrorState({ error }) {
    return (
        <div className="alert alert-danger py-2 px-3 mb-0">
            <div className="d-flex align-items-center gap-2 mb-1">
                <span>❌</span>
                <span className="badge bg-danger">Error</span>
            </div>
            <small className="fw-medium">{error.message}</small>
        </div>
    );
}

export default function ErrorHandlingExample() {
    const [promise, setPromise] = useState(() => fetchResource(false));
    const [showCode, setShowCode] = useState(false);
    const [errorKey, setErrorKey] = useState(0);

    const triggerFetch = (fail) => {
        setPromise(fetchResource(fail));
        setErrorKey(prev => prev + 1);
    };

    return (
        <div className="card shadow-sm">
            <LessonHeader data={lesson03Header} onViewCode={() => setShowCode(true)} />

            <div className="card-body py-2 px-3">
                <div className="alert alert-info py-1 px-2 mb-2">
                    <small style={{fontSize: '11px'}}><strong>Key:</strong> No try/catch—<code>use()</code> rejects are caught.</small>
                </div>
                <ErrorBoundary key={errorKey} fallback={(err) => <ErrorState error={err} />}>
                    <Suspense fallback={<LoadingState />}>
                        <Resource promise={promise} />
                    </Suspense>
                </ErrorBoundary>
            </div>

            <div className="card-footer py-2 px-3 bg-white">
                <div className="d-flex gap-2">
                    <button onClick={() => triggerFetch(false)} className="btn btn-success btn-sm flex-fill">
                        Success
                    </button>
                    <button onClick={() => triggerFetch(true)} className="btn btn-danger btn-sm flex-fill">
                        Error
                    </button>
                </div>
            </div>

            <EducationSection data={lesson03Education} />

            <CodeModal show={showCode} onHide={() => setShowCode(false)} title="Lesson 03" code={errorHandlingCode} />
        </div>
    );
}
