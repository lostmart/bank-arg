import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

/*  UI  */
import Button from '../../components/UI/atoms/Button'
import Section from '../../components/UI/organisms/Section'
import Loader from '../../components/UI/atoms/Loader'


/*  momlecule  */
import EditName from '../../components/UI/molecules/EditName'

/*  redux  */
import { useSelector, useDispatch } from 'react-redux'
import userSlice, { fetchUserThunk } from '../../features/userSlice'

const titleStyle = {
	fontSize: '2em',
	margin: '0.67em auto',
}

const UserPage = () => {
	const dispatch = useDispatch()

	const user = useSelector((state) => state.user)

	useEffect(() => {
		dispatch(fetchUserThunk())
	}, [])

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
		dispatch(fetchUserThunk())
		setEditMode((editMode) => !editMode)
	}

	// const user = useSelector((state) => state.user.data)
	const userProfileData = { firstName: '', lastName: '' }
	// console.log(userProfileData.firstName)

	// const localUser = useSelector((state) => state.user.data)

	/*  redner fn */
	const EditNameForm = () => {
		if (editMode) {
			return (
				<EditName
					editData={{
						firstName: user.data.firstName,
						lastName: user.data.lastName,
						handleClick: handleEditClick,
					}}
				/>
			)
		} else {
			return ''
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
	if (user.isLoading) {
		return (
			<main className="main bg-dark">
				<div className="loading-header">
					<Loader />
				</div>
			</main>
		)
	}

	// if (user.error && !user.isLoading) {
	// 	return (
	// 		<main className="main bg-dark">
	// 			<div className="loading-header">
	// 				{/*  user needs to log in again - token expired  */}
	// 				{user.error === 'Request failed with status code 401' && (
	// 					<Navigate to="/login" />
	// 				)}

	// 				<AlerIcon />
	// 				{user.error && <div>{user.error}</div>}
	// 			</div>
	// 		</main>
	// 	)
	// }

	return (
		<main className="main bg-dark">
			{!user.loading && user.data ? (
				<div>
					<div className="header">
						<h2 style={titleStyle}>
							Welcome back <br />
							{user.data.firstName} {user.data.lastName}
						</h2>

						<EditNameForm />
						{!editMode && (
							<Button
								btnParams={{
									text: 'Edit Name',
									className: 'edit-button',
									onClick: handleEditClick,
								}}
							/>
						)}
					</div>
					<RenderSections />
				</div>
			) : null}
		</main>
	)
}

export default UserPage
