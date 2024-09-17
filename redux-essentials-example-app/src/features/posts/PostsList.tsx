import { useAppSelector } from '@/app/hooks'
import { Link } from 'react-router-dom'
import { selectAllPosts } from './postsSlice'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from '@/components/TimeAgo'
import { ReactionButtons } from './ReactionButtons'

export const PostsList = () => {
  const posts = useAppSelector(selectAllPosts)
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const renderedPosts = orderedPosts.map((post) => {
    return (
      <article className="post-excerpt" key={post.id}>
        <Link to={`/posts/${post.id}`}>
          <h3>{post.title}</h3>
        </Link>
        <p className="post-content">{post.content.substring(0, 100)}</p>
        <p>
          Author: <PostAuthor userId={post.user} />
        </p>
        <TimeAgo timestamp={post.date} />
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
        <ReactionButtons post={post} />
      </article>
    )
  })
  return (
    <section className="posts-lists">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}
