import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '@/features/posts/postsSlice'
import usersReducer from '@/features/users/usersSlice'
import authReducer from '@/features/auth/authSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    auth: authReducer,
  },
})

// Infer the type of 'store'
export type AppStore = typeof store
// Infer the 'AppDispatch type from the store itself
export type AppDispatch = typeof store.dispatch
// Infer the 'RootState' type
export type RootState = ReturnType<typeof store.getState>
