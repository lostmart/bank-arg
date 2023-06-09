import { createSlice } from '@reduxjs/toolkit'
import { fetchUserData } from './userApi'

import userData from '../../mockup/userData.json'
// console.log(userData)

const userSlice = createSlice({
	name: 'user',
	initialState: {
		data: userData[0],
	},
	reducers: {},
})

export const { setUserError } = userSlice.actions

export default userSlice.reducer
