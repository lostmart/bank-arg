import React from 'react'

/*  UI  */
import Button from '../../components/UI/atoms/Button'
import Section from '../../components/UI/organisms/Section'
import SectionContent from '../../components/UI/molecules/SectionContent'

const titleStyle = {
	fontSize: '2em',
	width: '240px',
	margin: '0.67em auto',
}

const UserPage = (props) => {
	/* data  */
	const sectionContentElem = [
		{
			title: 'Argent Bank Checking (x8349)',
			accountAmmont: '$2,082.79',
			accountDesc: 'Available Balance',
		},
		{
			title: 'Argent Bank Savings (x6712)',
			accountAmmont: '$10,928.42',
			accountDesc: 'Available Balance',
		},
	]

	/* child React Element    */

	return (
		<main className="main bg-dark">
			<div className="header">
				<h2 style={titleStyle}>Welcome back Tony Jarvis!</h2>
				<Button btnParams={{ text: 'Edit Name', nameOfClass: 'edit-button' }} />
			</div>
			<Section>
				<div className="account-content-wrapper">
					<h3 className="account-title">ternura</h3>
					<p className="account-amount">$2,082.79</p>
					<p className="account-amount-description">Available Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</Section>
		</main>
	)
}

export default UserPage
