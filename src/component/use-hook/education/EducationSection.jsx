// Reusable Education Section Component
export default function EducationSection({ data }) {
    return (
        <div className="card-body border-top py-3 px-3 bg-light">
            <div className="row g-2">
                <div className="col-4">
                    <div className="small">
                        <strong className="text-primary d-block mb-1">🎯 Why</strong>
                        <span className="text-muted" style={{fontSize: '10px'}}>{data.why}</span>
                    </div>
                </div>
                <div className="col-4">
                    <div className="small">
                        <strong className="text-success d-block mb-1">⚙️ How</strong>
                        <span className="text-muted" style={{fontSize: '10px'}}>{data.how}</span>
                    </div>
                </div>
                <div className="col-4">
                    <div className="small">
                        <strong className="text-warning d-block mb-1">📌 When</strong>
                        <span className="text-muted" style={{fontSize: '10px'}}>{data.when}</span>
                    </div>
                </div>
            </div>
            
            <hr className="my-2" />
            
            <div className="small">
                <strong className="d-block mb-1">⚔️ React 18 vs 19</strong>
                <table className="table table-sm table-bordered mb-0" style={{fontSize: '10px'}}>
                    <thead className="table-light">
                        <tr><th>React 18</th><th>React 19</th></tr>
                    </thead>
                    <tbody>
                        {data.comparison.map((row, index) => (
                            <tr key={index}>
                                <td><code>{row.react18}</code></td>
                                <td><code>{row.react19}</code></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
