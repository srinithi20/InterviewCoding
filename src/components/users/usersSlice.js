import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '123456', name: 'ipad' },
  { id: '234556', name: 'Macbook Pro '},
  { id: '345667', name: 'GoPro' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export default usersSlice.reducer
