/*  redux store  */
import { configureStore } from '@reduxjs/toolkit'
import  localUserReducer from '../features/localUser'
import nameEditReducer from '../features/nameEdit'

export const store = configureStore({
	reducer: {
		localUser: localUserReducer,
		nameEdit: nameEditReducer,
	},
})