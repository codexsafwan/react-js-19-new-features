import React, { useOptimistic, useState, useTransition } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { react19OptimisticCode } from "./example/react19-code";
import { react19OptimisticDocs } from "./docs/optimistic-docs";
import DocsFooter from "../form-action/docs/React18DocsFooter";
import CodeModal from "../common/CodeModal";

const CommentReact19 = () => {
  const [text, setText] = useState("");
  const [showCode, setShowCode] = useState(false);
  const [isPending, startTransition] = useTransition();

  const [comments, addComment] = useOptimistic(
    [],
    (state, newComment) => [...state, newComment]
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    startTransition(async () => {
      addComment(text); // optimistic update
      setText("");

      // fake API
      await new Promise((res) => setTimeout(res, 1500));
    });
  };

  return (
    <>
      <div className="card h-100 shadow-sm border-success">
        <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">React 19: Native</h5>
          <div className="d-flex gap-2">
            <button
              className="btn btn-sm btn-light text-success"
              onClick={() => setShowCode(true)}
              title="Show Code"
            >
              View Code
            </button>
            <span className="badge bg-light text-success d-flex align-items-center">
              useOptimistic
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

            <button className="btn btn-success w-100" disabled={isPending}>
              {isPending ? "Posting..." : "Post (Optimistic)"}
            </button>
          </form>

          {comments.length > 0 && (
            <div className="mt-3">
              <h6 className="text-muted small">Comments:</h6>
              <ul className="list-group list-group-flush">
                {comments.map((c, i) => (
                  <li key={i} className="list-group-item px-0 py-2 border-bottom">
                    {c}
                    {i === comments.length - 1 && isPending && (
                       <span className="badge bg-warning text-dark ms-2" style={{fontSize: '0.7em'}}>Sending...</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <DocsFooter docs={react19OptimisticDocs} />
      </div>

      <CodeModal
        show={showCode}
        onHide={() => setShowCode(false)}
        title="React 19 usesOptimistic"
        code={react19OptimisticCode}
      />
    </>
  );
};

export default CommentReact19;
