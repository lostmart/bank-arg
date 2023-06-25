import { createSlice, createAction } from '@reduxjs/toolkit'



const initialState = {
	error: null,
	data: null,
}

export const balanceSlice = createSlice({
	name: 'transactions',
	initialState,
	reducers: {
		createTransactions: (state, action) => {
			return {
				...state,
				data: action.payload
			}
		}
	}

})

export const { fetchDataStart } = balanceSlice.actions

export default balanceSlice.reducer
