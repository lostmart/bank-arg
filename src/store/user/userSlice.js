import { createSlice } from '@reduxjs/toolkit'
import { fetchUserData } from './userApi'

import userData from '../../mockup/userData.json'
// console.log(userData)

const userSlice = createSlice({
	name: 'user',
	initialState: {
		data: userData[0],
	},
	reducers: {
		setUserLoading: (state) => {
			state.loading = true
			state.error = null
		},
		setUserSuccess: (state, action) => {
			state.loading = false
			state.data = userData[0]
		},
		setUserError: (state, action) => {
			state.loading = false
			state.error = action.payload
		},
	},
})

export const { setUserLoading, setUserSuccess, setUserError } =
	userSlice.actions

export const fetchUser = () => async (dispatch) => {
	try {
		dispatch(setUserLoading())
		// const userData = await fetchUserData() // Replace with your API call to fetch user data
		const userData = 'cxome'
		dispatch(setUserSuccess(userData))
	} catch (error) {
		dispatch(setUserError(error.message))
	}
}

export default userSlice.reducer
