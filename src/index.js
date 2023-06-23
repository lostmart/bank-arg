import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider, useSelector } from 'react-redux'
import { store } from './app/store'
import './assets/css/styles.css'

/* layout   */
import Layout from './components/layouts'

/* pages  */
import Home from './pages/Home'
import Login from './pages/Login'
import UserPage from './pages/User'
import NotFound from './pages/NotFound'
import Transactions from './pages/Transactions'

const root = ReactDOM.createRoot(document.getElementById('root'))

const ProtectedRoute = ({ children }) => {
	const user = useSelector((state) => state.user)
	if (user.data) {
		return children
	}
}

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="login" element={<Login />} />
						<Route
							path="user"
							element={
								<ProtectedRoute>
									<UserPage />
								</ProtectedRoute>
							}
						/>
						<Route path="transactions/:id" element={<Transactions />} />
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
