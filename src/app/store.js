/*  redux store  */
import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
import balanceReducer from '../features/transactionSlice'

export const store = configureStore({
	reducer: {
		user: userReducer,
		transactions: balanceReducer,
	},
})
