import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: '',
}

export const localUser = createSlice({
	name: 'localUser',
	initialState,
	reducers: {
		setLocalUser: (state, action) => {
			console.log(action.payload, state.localUser)
			// state.setLocalUser.value = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { setLocalUser } = localUser.actions

export default localUser.reducer
