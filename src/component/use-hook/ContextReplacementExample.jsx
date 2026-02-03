import { createContext, useContext, use, useState } from "react";
import CodeModal from "../common/CodeModal";
import LessonHeader from "./code-view/LessonHeader";
import { lesson05Header } from "./code-view/headerContent";
import { contextReplacementCode } from "./examples/codeSnippets";
import EducationSection from "./education/EducationSection";
import { lesson05Education } from "./education/educationContent";

const SettingsContext = createContext({ theme: 'dark' });

function React18Component() {
    const settings = useContext(SettingsContext);
    return (
        <div className="alert alert-secondary py-2 px-3 mb-2">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                    <span className="badge bg-secondary">R18</span>
                    <small className="text-muted" style={{fontSize: '10px'}}>useContext()</small>
                </div>
                <span className="fw-medium small">{settings.theme}</span>
            </div>
        </div>
    );
}

function React19Component({ isVisible }) {
    if (!isVisible) {
        return (
            <div className="alert alert-light border text-center py-2 px-3 mb-0">
                <small className="text-muted">Skipped</small>
            </div>
        );
    }

    const settings = use(SettingsContext);
    return (
        <div className="alert alert-primary py-2 px-3 mb-0">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                    <span className="badge bg-primary">R19</span>
                    <small className="text-primary" style={{fontSize: '10px'}}>use()</small>
                </div>
                <span className="fw-medium small">{settings.theme}</span>
            </div>
        </div>
    );
}

export default function ContextReplacementExample() {
    const [settings, setSettings] = useState({ theme: 'dark' });
    const [isVisible, setIsVisible] = useState(true);
    const [showCode, setShowCode] = useState(false);

    return (
        <div className="card shadow-sm">
            <LessonHeader data={lesson05Header} onViewCode={() => setShowCode(true)} />

            <div className="card-body py-2 px-3">
                <div className="alert alert-info py-1 px-2 mb-2">
                    <small style={{fontSize: '11px'}}><strong>Key:</strong> <code>use(Context)</code> replaces useContext.</small>
                </div>
                <SettingsContext.Provider value={settings}>
                    <React18Component />
                    <React19Component isVisible={isVisible} />
                </SettingsContext.Provider>
            </div>

            <div className="card-footer py-2 px-3 bg-white">
                <div className="d-flex gap-2">
                    <button onClick={() => setSettings(s => ({ ...s, theme: s.theme === 'dark' ? 'light' : 'dark' }))} className="btn btn-primary btn-sm flex-fill">
                        Toggle
                    </button>
                    <button onClick={() => setIsVisible(!isVisible)} className="btn btn-secondary btn-sm flex-fill">
                        {isVisible ? 'Hide' : 'Show'} R19
                    </button>
                </div>
            </div>

            <EducationSection data={lesson05Education} />

            <CodeModal show={showCode} onHide={() => setShowCode(false)} title="Lesson 05" code={contextReplacementCode} />
        </div>
    );
}
