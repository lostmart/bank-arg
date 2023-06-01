import { Link } from 'react-router-dom'
import banLogo from '../../../../assets/img/argentBankLogo.png'
import { FaUserCircle } from 'react-icons/fa'

const Header = () => {
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
					<FaUserCircle /> <span>Sign In</span>
				</Link>
			</div>
		</nav>
	)
}

export default Header
