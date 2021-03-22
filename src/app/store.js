import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../components/orders/ordersSlice'
import usersReducer from '../components/users/usersSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
})
