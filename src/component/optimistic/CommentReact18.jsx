import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { react18OptimisticCode } from "./example/react18-code";
import { react18OptimisticDocs } from "./docs/optimistic-docs";
import DocsFooter from "../form-action/docs/React18DocsFooter";
import CodeModal from "../common/CodeModal";

const CommentReact18 = () => {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tempComment = text;

    // optimistic update
    setComments((prev) => [...prev, tempComment]);
    setText("");
    setLoading(true);

    try {
      // fake API
      await new Promise((res) => setTimeout(res, 1500));
    } catch (err) {
      // rollback on error
      setComments((prev) => prev.filter((c) => c !== tempComment));
      alert("Failed to post comment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="card h-100 shadow-sm border-primary">
        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">React 18: Manual</h5>
          <div className="d-flex gap-2">
            <button
              className="btn btn-sm btn-light text-primary"
              onClick={() => setShowCode(true)}
              title="Show Code"
            >
              View Code
            </button>
            <span className="badge bg-light text-primary d-flex align-items-center">
              Client State
            </span>
          </div>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <input
              className="form-control mb-2"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Write comment..."
              required
            />

            <button className="btn btn-primary w-100" disabled={loading}>
              {loading ? "Posting..." : "Post (Optimistic)"}
            </button>
          </form>

          {comments.length > 0 && (
            <div className="mt-3">
              <h6 className="text-muted small">Comments:</h6>
              <ul className="list-group list-group-flush">
                {comments.map((c, i) => (
                  <li key={i} className="list-group-item px-0 py-2 border-bottom">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <DocsFooter docs={react18OptimisticDocs} />
      </div>

      <CodeModal
        show={showCode}
        onHide={() => setShowCode(false)}
        title="React 18 Optimistic UI"
        code={react18OptimisticCode}
      />
    </>
  );
};

export default CommentReact18;
