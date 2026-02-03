import { createContext, use, useState } from "react";
import CodeModal from "../common/CodeModal";
import LessonHeader from "./code-view/LessonHeader";
import { lesson02Header } from "./code-view/headerContent";
import { useContextCode } from "./examples/codeSnippets";
import EducationSection from "./education/EducationSection";
import { lesson02Education } from "./education/educationContent";

const ThemeContext = createContext("light");

function ThemeDisplay({ isEnabled }) {
    if (!isEnabled) {
        return (
            <div className="alert alert-secondary text-center py-3 mb-0">
                <span className="fs-5 d-block">🚫</span>
                <small className="text-muted">Context skipped</small>
            </div>
        );
    }

    const theme = use(ThemeContext);

    return (
        <div className={`alert py-2 px-3 mb-0 ${theme === 'light' ? 'alert-warning' : 'bg-dark text-white'}`}>
            <div className="d-flex justify-content-between align-items-center mb-1">
                <small className="text-uppercase fw-bold opacity-50" style={{fontSize: '10px'}}>Theme</small>
                <span>{theme === 'light' ? '☀️' : '🌙'}</span>
            </div>
            <h5 className="mb-0 fw-bold">{theme.toUpperCase()}</h5>
        </div>
    );
}

export default function UseContextExample() {
    const [theme, setTheme] = useState("light");
    const [isEnabled, setIsEnabled] = useState(true);
    const [showCode, setShowCode] = useState(false);

    return (
        <div className="card shadow-sm">
            <LessonHeader data={lesson02Header} onViewCode={() => setShowCode(true)} />

            <div className="card-body py-2 px-3">
                <div className="alert alert-info py-1 px-2 mb-2">
                    <small style={{fontSize: '11px'}}><strong>Key:</strong> <code>use()</code> works inside if blocks!</small>
                </div>
                <ThemeContext.Provider value={theme}>
                    <ThemeDisplay isEnabled={isEnabled} />
                </ThemeContext.Provider>
            </div>

            <div className="card-footer py-2 px-3 bg-white">
                <div className="d-flex gap-2">
                    <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')} className="btn btn-primary btn-sm flex-fill">
                        Toggle Theme
                    </button>
                    <button onClick={() => setIsEnabled(!isEnabled)} className="btn btn-secondary btn-sm flex-fill">
                        {isEnabled ? 'Disable' : 'Enable'}
                    </button>
                </div>
            </div>

            <EducationSection data={lesson02Education} />

            <CodeModal show={showCode} onHide={() => setShowCode(false)} title="Lesson 02" code={useContextCode} />
        </div>
    );
}
