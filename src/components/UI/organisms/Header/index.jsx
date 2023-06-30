import { Link } from 'react-router-dom'
import banLogo from '../../../../assets/img/argentBankLogo.png'
import { FaSignOutAlt, FaUserCircle } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { destroyUserData } from '../../../../features/userSlice'

const Header = () => {
	const user = useSelector((state) => state.user)
	const dispatch = useDispatch()

	const handleDestroyUser = () => {
		dispatch(destroyUserData())
		sessionStorage.clear()
	}

	return (
		<nav className="main-nav">
			<Link className="main-nav-logo-image" to="/">
				<img
					className="main-nav-logo-image"
					src={banLogo}
					alt="Argent Bank Logo"
				/>
			</Link>
			<h1 className="sr-only">Argent Bank</h1>
			<div>
				<Link to="login" className="main-nav-item">
					{!user.data ? (
						<>
							<FaUserCircle /> <span>Sign In</span>
						</>
					) : (
						<div
							onClick={handleDestroyUser}
							style={{
								display: 'flex',
								alignItems: 'center',
								gap: '.3em',
							}}>
							<FaSignOutAlt />
							Sign Out{' '}
						</div>
					)}
				</Link>
			</div>
		</nav>
	)
}

export default Header
