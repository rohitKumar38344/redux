import { RootState } from '@/app/store'
import { createSlice } from '@reduxjs/toolkit'
import { selectCurrentUsername } from '../auth/authSlice'

interface User {
  id: string
  name: string
}

const initialState: User[] = [
  { id: '0', name: 'Tianna Jenkins' },
  { id: '1', name: 'Kevin Grant' },
  { id: '2', name: 'Madison Price' },
]

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export const selectCurrentUser = (state: RootState) => {
  const currentUsername = selectCurrentUsername(state)
  return selectUserById(state, currentUsername)
}
export const selectAllUsers = (state: RootState) => state.users
export const selectUserById = (state: RootState, id: string | null) => state.users.find((user) => user.id === id)
export default usersSlice.reducer
