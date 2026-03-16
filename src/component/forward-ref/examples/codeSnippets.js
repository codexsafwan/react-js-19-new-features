export const refComparisonCode = `// BEFORE (React 18)
const LegacyInput = React.forwardRef((props, ref) => {
    return <input ref={ref} {...props} />;
});
LegacyInput.displayName = 'LegacyInput';

// AFTER (React 19)
const ModernInput = ({ ref, ...props }) => {
    return <input ref={ref} {...props} />;
};`;

export const realLifeRefCode = `// React 19: ref is just a prop
const SearchInput = ({ ref, label, onSearch }) => {
    return (
        <div>
            <label>{label}</label>
            <input ref={ref} onChange={e => onSearch(e.target.value)} />
        </div>
    );
};

// Parent Component
function Parent() {
    const searchRef = useRef(null);
    return <SearchInput ref={searchRef} label="Search" onSearch={...} />;
}`;
