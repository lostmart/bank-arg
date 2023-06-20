import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

/*  organisms  */
import Header from '../UI/organisms/Header'
import Footer from '../UI/organisms/Footer'
import Error from '../UI/organisms/Error'

const Layout = () => {
	const user = useSelector((state) => state.user)

	const [showError, setShowError] = useState(false)

	useEffect(() => {
		user.error && setShowError(true)
	}, [user.error])

	return (
		<div className="container">
			<Header />
			{!showError ? <Outlet /> : <Error />}

			<Footer />
		</div>
	)
}

export default Layout
