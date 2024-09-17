import "./App.css";

import PostForm from "./features/posts/AddPostForm";
import { Posts } from "./features/posts/PostsList";

function App() {
  return (
    <>
      <PostForm />
      <Posts />
    </>
  );
}

export default App;
