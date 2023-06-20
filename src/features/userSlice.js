import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
	isLoading: false,
	error: null,
	data: null,
}
export const fetchUserThunk = createAsyncThunk('users/fetchUser', async () => {
	const url = 'http://localhost:3001/api/v1/user/profile'
	const data = {
		email: 'tony@stark.com',
		password: 'password123',
	}
	const config = {
		headers: {
			'Content-Type': 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODAyZTc3NmQyMWY5MzlkMDQzZjA1ZiIsImlhdCI6MTY4NzE3ODE4MCwiZXhwIjoxNjg3MjY0NTgwfQ.GQyk_kZ9BxzqRglIcaOZSGXHXqO5IgCKr_QqmYF2ypI',
		},
	}

	const response = await axios.post(url, data, config)
	// console.log(response.data.message)
	// const response = await fetch('http://localhost:3001/')
	//const data = await response.json()
	// console.log('data:', data)
	return response.data.body
})

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
	},
})

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } =
	userSlice.actions

export default userSlice.reducer