import { PropTypes } from 'prop-types'

const SectionContent = ({ children }) => {
	return (
		<>
			{/* <div className="account-content-wrapper">
				<h3 className="account-title">ternura</h3>
				<p className="account-amount">$2,082.79</p>
				<p className="account-amount-description">Available Balance</p>
			</div>
			<div className="account-content-wrapper cta">
				<button className="transaction-button">View transactions</button>
			</div> */}
			{children}
		</>
	)
}

SectionContent.propTypes = {
	/**
	 *
	 * @prop {object} btnParams -  html to be rendered on the page
	 * @returns {React.JSX.Element}
	 */
	children: PropTypes.object,
}

export default SectionContent
