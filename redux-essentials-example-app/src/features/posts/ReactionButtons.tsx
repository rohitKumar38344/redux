import { useAppDispatch } from '@/app/hooks'
import { Post, ReactionName } from './postsSlice'
import { reactionAdded } from './postsSlice'

const reactionEmoji: Record<ReactionName, string> = {
  thumbsUp: '👍',
  tada: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
}

interface ReactionButtonsProps {
  post: Post
}

export const ReactionButtons = ({ post }: ReactionButtonsProps) => {
  const dispatch = useAppDispatch()

  const reactionButtons = Object.entries(reactionEmoji).map(function ([stringName, emoji]) {
    const reaction = stringName as ReactionName
    return (
      <button type="button" key={reaction} onClick={() => dispatch(reactionAdded({ postId: post.id, reaction }))}>
        {emoji}
        {post.reactions[reaction]}
      </button>
    )
  })
  return <div>{reactionButtons}</div>
}
