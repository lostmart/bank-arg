import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

/*  UI  */
import Button from '../../components/UI/atoms/Button'
import Section from '../../components/UI/organisms/Section'
import Loader from '../../components/UI/atoms/Loader'

/*  momlecule  */
import EditName from '../../components/UI/molecules/EditName'

/* redux  */
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserThunk } from '../../features/userSlice'
import { fetchTransactionThunk } from '../../features/transactionSlice'


const titleStyle = {
	fontSize: '2em',
	margin: '0.67em auto',
}

const UserPage = () => {
	const dispatch = useDispatch()

	const user = useSelector((state) => state.user)
	const balance = useSelector((state) => state.balance)

	useEffect(() => {
		dispatch(fetchUserThunk())
		dispatch(fetchTransactionThunk())
	}, [])

	/* edit mode   */
	const [editMode, setEditMode] = useState(false)

	const handleEditClick = () => {
		dispatch(fetchUserThunk())
		setEditMode((editMode) => !editMode)
	}

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
		if (balance.data) {
			const data = balance.data[0].userBalance.data
			return data.map((section, indx) => {
				return (
					<Section key={indx} className="account">
						<div className="account-content-wrapper">
							<h3 className="account-title">
								{section.title} ({section.id})
							</h3>
							<p className="account-amount">$ {section.amount}</p>
							<p className="account-amount-description">Available Balance</p>
						</div>
						<div className="account-content-wrapper cta">
							<Link
								className="transaction-button"
								to={`/transactions/${section.id}`}>
								View Transactions
							</Link>
						</div>
					</Section>
				)
			})
		}
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
