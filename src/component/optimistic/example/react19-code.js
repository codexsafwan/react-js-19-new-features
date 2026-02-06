export const react19OptimisticCode = `import React, { useOptimistic, useState, useTransition } from "react";

const CommentReact19 = () => {
  const [text, setText] = useState("");
  const [isPending, startTransition] = useTransition();

  // 1. Setup Optimistic State
  const [comments, addComment] = useOptimistic(
    [], // Initial State
    (state, newComment) => [...state, newComment] // Reducer
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    startTransition(async () => {
      // 2. Optimistic Update
      addComment(text); 
      setText("");

      // 3. API Call (Revert handled automatically if this fails)
      await new Promise((res) => setTimeout(res, 1500));
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button disabled={isPending}>Post</button>
      <ul>
        {comments.map((c, i) => <li key={i}>{c}</li>)}
      </ul>
    </form>
  );
};`;
