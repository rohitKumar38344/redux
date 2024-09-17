import { nanoid } from '@reduxjs/toolkit'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { postAdded, type Post } from './postsSlice'
import { selectAllUsers } from '../users/usersSlice'
import { selectCurrentUsername } from '../auth/authSlice'

interface AddPostFormFields extends HTMLFormControlsCollection {
  postTitle: HTMLInputElement
  postContent: HTMLTextAreaElement
  postAuthor: HTMLSelectElement
}

interface AddPostFormElemets extends HTMLFormElement {
  readonly elements: AddPostFormFields
}

export const AddPostForm = () => {
  const dispatch = useAppDispatch()
  const userId = useAppSelector(selectCurrentUsername)

  function handleSubmit(e: React.FormEvent<AddPostFormElemets>) {
    e.preventDefault()
    const { elements } = e.currentTarget
    const title = elements.postTitle.value
    const content = elements.postContent.value

    dispatch(postAdded(title, content, userId))
    e.currentTarget.reset()
  }

  const userOptions = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    )
  })
  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Post Title:</label>
        <input type="text" name="postTitle" id="postTitle" required />
        <label htmlFor="postAuthor">Author</label>
        <select name="postAuthor" id="postAuthor">
          <option value={''}></option>
          {userOptions}
        </select>
        <label htmlFor="postContent">Conent:</label>
        <textarea name="postContent" id="postContent" defaultValue="" required />
        <button>Save Post</button>
      </form>
    </section>
  )
}
