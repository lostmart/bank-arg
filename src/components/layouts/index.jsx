import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'

/*  redux  */
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserThunk } from '../../features/userSlice'
import { fetchTransactionThunk } from '../../features/transactionSlice'



/*  organisms  */
import Header from '../UI/organisms/Header'
import Footer from '../UI/organisms/Footer'
import Error from '../UI/organisms/Error'

const Layout = () => {
	const dispatch = useDispatch()

	const user = useSelector((state) => state.user)
	const balance = useSelector((state) => state.balance)

	useEffect(() => {	
			dispatch(fetchUserThunk())
			dispatch(fetchTransactionThunk())
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
