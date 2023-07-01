import { Link, useNavigate } from 'react-router-dom'
import banLogo from '../../../../assets/img/argentBankLogo.png'
import { FaSignOutAlt, FaUserCircle } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { destroyUserData } from '../../../../features/userSlice'
import { useLocation } from 'react-router-dom'

const Header = () => {
	const location = useLocation()
	const navigate = useNavigate()

	const user = useSelector((state) => state.user)
	const dispatch = useDispatch()

	const handleDestroyUser = () => {
		dispatch(destroyUserData())
		sessionStorage.clear()
		navigate('/')
	}

	const IconRender = () => {
		if (!user.data) {
			return (
				<Link to="login" className="main-nav-item">
					<FaUserCircle /> <span>Sign In</span>
				</Link>
			)
		} else if (user.data && location.pathname !== '/user') {
			return (
				<Link to="user" className="main-nav-item">
					<FaUserCircle /> <span>{user.data.firstName}</span>
				</Link>
			)
		} else {
			return (
				<div
					onClick={handleDestroyUser}
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '.3em',
						fontWeight: 'bold',
						cursor: 'pointer',
					}}>
					<FaSignOutAlt />
					Sign Out
				</div>
			)
		}
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
				<IconRender />
			</div>
		</nav>
	)
}

export default Header
