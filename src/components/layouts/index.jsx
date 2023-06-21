import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

/*  organisms  */
import Header from '../UI/organisms/Header'
import Footer from '../UI/organisms/Footer'
import Error from '../UI/organisms/Error'

const Layout = () => {
	const user = useSelector((state) => state.user)

	return (
		<div className="container">
			<Header />
			{!user.error ? <Outlet /> : <Error />}

			<Footer />
		</div>
	)
}

export default Layout
