import { useEffect, useState } from 'react'

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

	const handleEditClick = (e) => {
		setEditMode((editMode) => !editMode)

		// console.log(e.target.innerHTML)
		const buttonType = e.target.innerHTML
		switch (buttonType) {
			case 'Edit Name':
				console.log('editar')
				break
			case 'Cancel':
				console.log('canelar ')
				break
			case 'Save':
				console.log('salvar .. ')
				break
			default:
				return true
		}
	}

	/*   inputs changes    */
	const [localUser, setLocalUser] = useState({
		firstName: 'Andurro',
		lastName: 'Gegoh',
	})

	const handleInputChange = (inputValue) => {
		console.log('listening from the page component .. ', inputValue)
		setLocalUser((prevState) => ({
			...prevState,
			firstName: inputValue,
		}))
	}

	// const user = useSelector((state) => state.user.data)
	const userProfileData = { firstName: 'Pepe', lastName: 'Fernandez' }
	// console.log(userProfileData.firstName)

	// const localUser = useSelector((state) => state.user.data)

	/*  redner fn */
	const EditNameForm = () => {
		if (editMode) {
			return (
				<EditName
					editData={{
						firstName: localUser.firstName,
						lastName: localUser.lastName,
						handleClick: handleEditClick,
						handleInputChange: handleInputChange,
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
	// {
	// 	user.loading && <div>loading ...</div>
	// }
	if (user.loading) {
		return (
			<main className="main bg-dark">
				<div className="loading-header">
					<Loader />
				</div>
			</main>
		)
	}

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
