import React from 'react'
import { AddPostForm } from './AddPostForm'
import { PostsList } from './PostsList'

export const PostMainPage = () => {
  return (
    <div>
      <AddPostForm />
      <PostsList />
    </div>
  )
}
