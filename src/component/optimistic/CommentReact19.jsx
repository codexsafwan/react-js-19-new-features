import React, { useOptimistic, useState, useTransition } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CommentReact19 = () => {
  const [text, setText] = useState("");
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
    <div className="card p-3">
      <h5>React 19 Comment</h5>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write comment..."
          required
        />

        <button className="btn btn-success" disabled={isPending}>
          {isPending ? "Posting..." : "Post"}
        </button>
      </form>

      <ul className="list-group mt-3">
        {comments.map((c, i) => (
          <li key={i} className="list-group-item">{c}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentReact19;
