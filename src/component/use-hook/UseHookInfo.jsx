export default function UseHookInfo() {
    return (
        <div className="card shadow-sm">
            <div className="card-header py-2 px-3 bg-dark text-white">
                <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-light text-dark">Lab Report</span>
                    <div className="d-flex gap-1">
                        <span className="badge rounded-circle bg-primary p-1"></span>
                        <span className="badge rounded-circle bg-success p-1"></span>
                        <span className="badge rounded-circle bg-warning p-1"></span>
                    </div>
                </div>
            </div>

            <div className="card-body py-3 px-3">
                <h5 className="fw-bold mb-3">The <code>use()</code> Shift</h5>
                
                <p className="text-muted small mb-3">
                    React 19 moves away from manual state orchestration. The <code>use()</code> API bridges async data and declarative UI.
                </p>

                <div className="d-flex flex-column gap-2 mb-3">
                    <div className="alert alert-primary py-2 px-3 mb-0">
                        <small className="text-uppercase fw-bold text-primary d-block mb-1" style={{fontSize: '10px'}}>Key Takeaway 01</small>
                        <p className="fw-bold small mb-0">No more "Wait for Effect"</p>
                        <small className="text-muted">Stop using <code>useEffect</code> to fetch data. Kick off promises early.</small>
                    </div>
                    
                    <div className="alert alert-success py-2 px-3 mb-0">
                        <small className="text-uppercase fw-bold text-success d-block mb-1" style={{fontSize: '10px'}}>Key Takeaway 02</small>
                        <p className="fw-bold small mb-0">The .Provider is Legacy</p>
                        <small className="text-muted">Use <code>{"<Context value={...}>"}</code> directly.</small>
                    </div>
                </div>

                <div className="bg-dark text-white rounded p-3">
                    <small className="text-uppercase fw-bold text-primary d-block mb-2" style={{fontSize: '10px'}}>Architectural Vision</small>
                    <p className="small mb-0 fst-italic text-light">
                        "The goal of React 19 is to make async code look and behave exactly like sync code. <code className="text-info">use()</code> is the fulfillment of that promise."
                    </p>
                </div>
            </div>
        </div>
    );
}
