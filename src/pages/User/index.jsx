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

const UserPage = () => {
	/* data  */
	const sectionContentElem = [
		{
			title: 'Argent Bank Checking (x8349)',
			accountAmmont: '$2,082.79',
		},
		{
			title: 'Argent Bank Savings (x6712)',
			accountAmmont: '$10,928.42',
		},
	]

	/**
	 * @function
	 * @returns {Array<JSX.Element>} - Array of rendered section elements.
	 */
	const renderSections = () => {
		return sectionContentElem.map((section) => {
			return (
				<Section className="account">
					<div className="account-content-wrapper">
						<h3 className="account-title">{section.title}</h3>
						<p className="account-amount">{section.accountAmmont}</p>
						<p className="account-amount-description">Available Balance</p>
					</div>
					<div className="account-content-wrapper cta">
						<Button
							btnParams={{
								text: 'View transactions',
								className: 'transaction-button',
							}}
						/>
					</div>
				</Section>
			)
		})
	}

	return (
		<main className="main bg-dark">
			<div className="header">
				<h2 style={titleStyle}>Welcome back Tony Jarvis!</h2>
				<Button btnParams={{ text: 'Edit Name', className: 'edit-button' }} />
			</div>
			{renderSections()}
		</main>
	)
}

export default UserPage
