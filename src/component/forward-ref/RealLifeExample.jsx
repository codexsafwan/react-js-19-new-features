import React, { useRef, useState } from 'react';
import CodeModal from "../common/CodeModal";
import LessonHeader from "../use-hook/code-view/LessonHeader";
import { lesson02Header } from "./code-view/headerContent";
import { realLifeRefCode } from "./examples/codeSnippets";
import EducationSection from "../use-hook/education/EducationSection";
import { lesson02Education } from "./education/educationContent";

// React 19: ref is just a prop
const SearchInput = ({ ref, label, onSearch }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
            <label className="small fw-bold text-muted text-uppercase" style={{ letterSpacing: '0.05em' }}>
                {label}
            </label>
            <div className="position-relative">
                <input
                    ref={ref}
                    type="text"
                    onChange={(e) => onSearch(e.target.value)}
                    placeholder="Search components..."
                    className="form-control"
                    style={{ paddingLeft: '2.5rem' }}
                />
                <span className="position-absolute top-50 start-0 translate-middle-y ms-2 text-muted" style={{ opacity: 0.5 }}>
                    🔍
                </span>
            </div>
        </div>
    );
};

export default function RealLifeExample() {
    const searchRef = useRef(null);
    const [query, setQuery] = useState('');
    const [showCode, setShowCode] = useState(false);

    const handleQuickFocus = () => {
        searchRef.current?.focus();
        if (searchRef.current) {
            searchRef.current.style.borderColor = 'hsl(var(--secondary))';
            searchRef.current.classList.add('shadow-sm');
            setTimeout(() => {
                if (searchRef.current) {
                    searchRef.current.style.borderColor = '';
                    searchRef.current.classList.remove('shadow-sm');
                }
            }, 1000);
        }
    };

    return (
        <div className="card shadow-sm">
            <LessonHeader data={lesson02Header} onViewCode={() => setShowCode(true)} />
            <div className="card-body py-3 px-3">
                <SearchInput ref={searchRef} label="Quick Navigation" onSearch={setQuery} />
                <div className="d-flex align-items-center gap-2 mt-3">
                    <button onClick={handleQuickFocus} className="btn btn-primary btn-sm flex-grow-1">
                        Focus Input (Ctrl + K)
                    </button>
                    <div className="px-2 py-1 bg-light rounded border text-primary small fw-semibold">
                         Query: "{query || '...'}"
                    </div>
                </div>
            </div>
            
            <EducationSection data={lesson02Education} />
            <CodeModal show={showCode} onHide={() => setShowCode(false)} title="Real Life Scenario" code={realLifeRefCode} />
        </div>
    );
}
