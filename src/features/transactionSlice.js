import { createSlice, createAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchTransactionThunk = createAsyncThunk(
	'transaction/fetchTransaction',
	async () => {
		const url = './mockdata/userData.json'
		const response = await axios.get(url)
		if (response.status === 200) {
			return response.data
		}
	}
)

const initialState = {
	isLoading: false,
	error: null,
	data: null,
}

export const balanceSlice = createSlice({
	name: 'transactions',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchTransactionThunk.pending, (state) => {
			state.isLoading = true
		})

		builder.addCase(fetchTransactionThunk.fulfilled, (state, action) => {
			state.isLoading = false
			state.data = action.payload
			state.error = ''
		})
	},
})

export const { fetchDataStart } = balanceSlice.actions

export default balanceSlice.reducer
