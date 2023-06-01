import { Outlet } from 'react-router-dom'


/*  organisms  */
import Header from '../UI/organisms/Header'
import Footer from '../UI/organisms/Footer'

const Layout = () => {
	return (
		<div className="container">
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}

export default Layout
