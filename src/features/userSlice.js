import { createSlice, createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const initialState = {
	isLoading: false,
	error: null,
	data: null,
}

// export const loginUserThunk = createAsyncThunk('users/fetchUser', async () => {
// 	const url = 'http://localhost:3001/api/v1/user/login'
// 	const data = {
// 		email: 'tony@stark.com',
// 		password: 'password123',
// 	}

// 	const response = await axios.post(url, data)
// 	console.log(response)
// })
export const fetchUserThunk = createAsyncThunk('users/fetchUser', async () => {
	const url = 'http://localhost:3001/api/v1/user/profile'
	const token = sessionStorage.getItem('token')
	if (token) {
		const data = {}
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		}

		const response = await axios.post(url, data, config)
		return response.data.body
	} else {
		/*  ?? needed ??  */
		const navigate = useNavigate()
		sessionStorage.clear()
		navigate('/user')
	}
})

/* reset users error  */
// Action Creator
export const resetUserError = createAction('user/resetError')
export const setUserError = createAction('user/setUserError')

export const userSlice = createSlice({
	name: 'user',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchUserThunk.pending, (state) => {
			state.isLoading = true
		})
		builder.addCase(fetchUserThunk.fulfilled, (state, action) => {
			state.isLoading = false
			state.data = action.payload
			state.error = ''
		})
		builder.addCase(fetchUserThunk.rejected, (state, action) => {
			state.isLoading = false
			state.users = []
			state.error = action.error.message
		})
		builder.addCase(resetUserError, (state) => {
			state.error = false
		})
		builder.addCase(setUserError, (state, action) => {
			// console.log(action)
			return {
				...state,
				error: action.payload,
			}
		})
	},
})

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } =
	userSlice.actions

export default userSlice.reducer
