import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<div className="hero">
			<section className="hero-content">
				<p className="subtitle">Error 404</p>
				<p className="subtitle">Page Not found</p>
				<Link to="/">
					<button class="transaction-button">Home</button>
				</Link>
			</section>
		</div>
	)
}

export default NotFound
