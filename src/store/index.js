import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import userReducer from './user/userSlice'
import localUserReducer from './user/localUser'

export default configureStore({
	reducer: {
		counter: counterReducer,
		user: userReducer,
		localUser: localUserReducer,
	},
})
