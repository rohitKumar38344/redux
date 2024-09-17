import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { nanoid } from "@reduxjs/toolkit";

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    if (title && content) {
      dispatch(postAdded({ title, content, id: nanoid() }));
    }
    setTitle("");
    setContent("");
  }
  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Post Title:</label>{" "}
        <input
          type="text"
          name="postTitle"
          id="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="postContent">Content: </label>
        <input
          type="text"
          name="postContent"
          id="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button>Save post</button>
      </form>
    </section>
  );
}
