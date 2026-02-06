export const react18OptimisticCode = `import React, { useState } from "react";

const CommentReact18 = () => {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tempComment = text;

    // 1. Optimistic update (Manual)
    setComments((prev) => [...prev, tempComment]);
    setText("");
    setLoading(true);

    try {
      // 2. API Call
      await new Promise((res) => setTimeout(res, 1500));
    } catch (err) {
      // 3. Rollback on error (Manual)
      setComments((prev) => prev.filter((c) => c !== tempComment));
      alert("Failed to post comment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button disabled={loading}>Post</button>
      <ul>
        {comments.map((c, i) => <li key={i}>{c}</li>)}
      </ul>
    </form>
  );
};`;
