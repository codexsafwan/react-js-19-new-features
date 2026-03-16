import React, { useRef, useState } from 'react';
import CodeModal from "../common/CodeModal";
import LessonHeader from "../use-hook/code-view/LessonHeader";
import { lesson01Header } from "./code-view/headerContent";
import { refComparisonCode } from "./examples/codeSnippets";
import EducationSection from "../use-hook/education/EducationSection";
import { lesson01Education } from "./education/educationContent";

// --- React 18 Pattern (The Old Way) ---
const LegacyInput = React.forwardRef((props, ref) => {
    return (
        <div className="input-container">
            <span className="badge badge-secondary mb-2 d-block w-fit-content">React 18</span>
            <input 
                ref={ref} 
                {...props} 
                className="form-control form-control-sm"
                placeholder="forwardRef required..."
            />
            <style>{`
                .input-container {
                    padding: 1rem;
                    background: hsl(var(--secondary-light) / 0.1);
                    border-radius: 0.5rem;
                    border: 1px solid hsl(var(--border));
                }
            `}</style>
        </div>
    );
});
LegacyInput.displayName = 'LegacyInput';

// --- React 19 Pattern (The New Way) ---
const ModernInput = ({ ref, ...props }) => {
    return (
        <div className="input-container modern border-primary">
            <span className="badge badge-primary mb-2 d-block w-fit-content">React 19</span>
            <input 
                ref={ref} 
                {...props} 
                className="form-control form-control-sm border-primary"
                placeholder="ref as a prop! ✨"
            />
            <style>{`
                .modern {
                    background: hsl(var(--primary-light) / 0.1);
                }
            `}</style>
        </div>
    );
};

export default function RefComparison() {
    const legacyRef = useRef(null);
    const modernRef = useRef(null);
    const [showCode, setShowCode] = useState(false);

    const focusLegacy = () => legacyRef.current?.focus();
    const focusModern = () => modernRef.current?.focus();

    return (
        <div className="card shadow-sm">
            <LessonHeader data={lesson01Header} onViewCode={() => setShowCode(true)} />
            <div className="card-body py-3 px-3">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                    <div>
                        <LegacyInput ref={legacyRef} />
                        <button onClick={focusLegacy} className="btn btn-secondary btn-sm mt-2 w-100">
                            Focus Legacy Input
                        </button>
                    </div>
                    <div>
                        <ModernInput ref={modernRef} />
                        <button onClick={focusModern} className="btn btn-primary btn-sm mt-2 w-100">
                            Focus Modern Input
                        </button>
                    </div>
                </div>
            </div>
            
            <EducationSection data={lesson01Education} />
            <CodeModal show={showCode} onHide={() => setShowCode(false)} title="Syntax Comparison" code={refComparisonCode} />
        </div>
    );
};
