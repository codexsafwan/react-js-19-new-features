import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CommentReact18 = () => {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

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
    <div className="card p-3">
      <h5>React 18 Comment</h5>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write comment..."
          required
        />

        <button className="btn btn-primary" disabled={loading}>
          {loading ? "Posting..." : "Post"}
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

export default CommentReact18;
