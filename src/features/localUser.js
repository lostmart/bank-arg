import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	firstName: '',
	lastName: '',
}

export const localUserSlice = createSlice({
	name: 'localUser',
	initialState,
	reducers: {},
})

export default localUserSlice.reducer
