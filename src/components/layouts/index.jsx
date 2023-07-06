import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'

/*  redux  */
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserThunk } from '../../features/userSlice'


/*  organisms  */
import Header from '../UI/organisms/Header'
import Footer from '../UI/organisms/Footer'
import Error from '../UI/organisms/Error'

const Layout = () => {
	const dispatch = useDispatch()

	const user = useSelector((state) => state.user)

	useEffect(() => {
		if (sessionStorage.getItem('token')) {
			dispatch(fetchUserThunk())
		}
	}, [])

	return (
		<div className="container">
			<Header />
			{!user.error ? <Outlet /> : <Error />}

			<Footer />
		</div>
	)
}

export default Layout
