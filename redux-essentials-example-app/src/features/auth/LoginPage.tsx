import { useAppDispatch, useAppSelector } from '@/app/hooks'
import React from 'react'
import { selectAllUsers } from '../users/usersSlice'
import { useNavigate } from 'react-router-dom'
import { userLoggedIn } from './authSlice'

interface LoginPageFormFields extends HTMLFormControlsCollection {
  username: HTMLSelectElement
}

interface LoginPageFormElements extends HTMLFormElement {
  readonly elements: LoginPageFormFields
}

export const LoginPage = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(selectAllUsers)
  const navigate = useNavigate()

  function handleSubmit(e: React.FormEvent<LoginPageFormElements>) {
    e.preventDefault()

    const username = e.currentTarget.elements.username.value
    dispatch(userLoggedIn(username))
    navigate('/posts')
  }

  const usersOptions = users.map((user) => {
    return <option key={user.id}>{user.name}</option>
  })
  return (
    <section>
      <h2>Welcome to Twitter?</h2>
      <h2>Please log in:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">User: </label>
        <select name="username" id="username" required>
          {usersOptions}
        </select>
        <button>Log In</button>
      </form>
    </section>
  )
}
