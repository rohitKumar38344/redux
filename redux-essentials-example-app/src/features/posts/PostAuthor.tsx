import { useAppSelector } from '@/app/hooks'
import { selectUserById } from '../users/usersSlice'
import { p } from 'node_modules/msw/lib/core/GraphQLHandler-Cu4Xvg4S'

type PostAuthorProps = {
  userId: string
}
export const PostAuthor = ({ userId }: PostAuthorProps) => {
  const author = useAppSelector((state) => selectUserById(state, userId))

  return <span>by {author?.name ?? 'Unknown author'}</span>
}
