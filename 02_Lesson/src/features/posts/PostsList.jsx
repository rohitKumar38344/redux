import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

export const Posts = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => {
    return (
      <article key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.content.substring(0, 200)}</p>
      </article>
    );
  });
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
