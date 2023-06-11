import { useState } from 'react'

/*  UI  */
import Button from '../../components/UI/atoms/Button'
import Section from '../../components/UI/organisms/Section'

/*  momlecule  */
import EditName from '../../components/UI/molecules/EditName'

/*  redux  */
import { useSelector, useDispatch } from 'react-redux'

const titleStyle = {
	fontSize: '2em',
	width: '295px',
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

	/* edit mode   */
	const [editMode, setEditMode] = useState(false)

	const handleEditClick = () => {
		setEditMode((editMode) => !editMode)
	}

	const user = useSelector((state) => state.user.data)
	const userProfileData = user.userProfile
	// console.log(userProfileData.firstName)

	/*  redner fn */
	const RenderName = () => {
		if (!editMode) {
			return (
				<>
					{userProfileData.firstName} {userProfileData.lastName}
				</>
			)
		} else {
			return <EditName editData={{firstName: userProfileData.firstName, lastName: userProfileData.lastName}} />
		}
	}

	/**
	 * @function
	 * @returns {Array<JSX.Element>} - Array of rendered section elements.
	 */
	const RenderSections = () => {
		return sectionContentElem.map((section, indx) => {
			return (
				<Section key={indx} className="account">
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
				<h2 style={titleStyle}>
					Welcome back <br />
					<RenderName />
				</h2>
				<Button
					btnParams={{
						text: 'Edit Name',
						className: 'edit-button',
						onClick: handleEditClick,
					}}
				/>
			</div>
			<RenderSections />
		</main>
	)
}

export default UserPage
