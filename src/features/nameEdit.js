import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: false,
}

export const nameEditSlice = createSlice({
	name: 'nameEdit',
	initialState,
	reducers: {
		setNameEdit: (state) => {
			state.value = !state.value // come check this !
		},
	},
})

export default nameEditSlice.reducer
