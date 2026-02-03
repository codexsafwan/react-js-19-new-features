import { createContext, useContext, useState } from "react";
import CodeModal from "../common/CodeModal";

const UserContext = createContext(null);

function UserProfile() {
    // React 18: MUST be called at the top level
    // Cannot be conditional
    const user = useContext(UserContext);
    
    if (!user) return <p className="text-foreground/40 italic">Loading user context...</p>;

    return (
        <div className="flex items-center gap-4 p-4 bg-foreground/5 rounded-xl border border-border">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                {user.name.charAt(0)}
            </div>
            <div>
                <p className="font-bold text-sm leading-tight">{user.name}</p>
                <p className="text-xs text-foreground/50">{user.email}</p>
            </div>
        </div>
    );
}

export default function React18ContextExample() {
    const [user, setUser] = useState({ name: "Alex Jenkins", email: "alex@example.com" });
    const [showCode, setShowCode] = useState(false);

    const codeSnippet = `
const UserContext = createContext(null);

function UserProfile() {
  // MUST be at top level
  // Rules of Hooks apply strictly here
  const user = useContext(UserContext);
  
  if (!user) return <p>Loading...</p>;
  return <p>{user.name}</p>;
}
    `;

    return (
        <div className="premium-card flex flex-col relative border-foreground/5 bg-foreground/[0.02]">
            <div className="flex justify-between items-start mb-6">
                <div className="flex gap-3">
                    <span className="badge bg-foreground/10 text-foreground/50 border-foreground/10">useContext</span>
                    <span className="badge bg-foreground/5 text-foreground/30 border-foreground/5 font-medium">REACT 18 PATTERN</span>
                </div>
                <button
                    onClick={() => setShowCode(true)}
                    className="premium-button text-xs py-1.5 px-3 bg-white border-border"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                    View Code
                </button>
            </div>

            <h3 className="text-xl font-black mb-2 tracking-tight opacity-70">Traditional Context</h3>
            <p className="text-foreground/40 text-sm mb-6 flex-grow">
                The traditional <code>useContext</code> hook follows the "Rules of Hooks" strictly. It cannot be used inside <code>if</code> blocks, loops, or nested functions, requiring careful component structuring.
            </p>

            <div className="bg-white/40 rounded-2xl p-6 border border-border shadow-sm mt-auto">
                <UserContext.Provider value={user}>
                    <UserProfile />
                    <button 
                        onClick={() => setUser(u => ({ ...u, name: u.name === 'Alex Jenkins' ? 'Sam Fisher' : 'Alex Jenkins' }))}
                        className="w-full mt-4 py-2 rounded-lg border border-border bg-white text-foreground font-semibold text-xs hover:bg-slate-50 transition-all"
                    >
                        Update User Name
                    </button>
                </UserContext.Provider>
            </div>

            <CodeModal
                show={showCode}
                onHide={() => setShowCode(false)}
                title="useContext (React 18) Code"
                code={codeSnippet}
            />
        </div>
    );
}
