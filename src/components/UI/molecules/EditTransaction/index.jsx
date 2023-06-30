import Input from '../../atoms/Input'
import Button from '../../atoms/Button'
import { useState, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'

import { useSelector } from 'react-redux'

const EditTransaction = ({ editParams }) => {
	const { id } = useParams()

	const user = useSelector((state) => state.user)

	const formStyle = {
		display: 'flex',
		gap: '10px',
	}

	const [inpuState, setInputState] = useState({ type: '', value: '' })

	useEffect(() => {
		if (editParams.category || editParams.category === '') {
			setInputState(() => {
				return {
					value: editParams.category,
					type: 'category',
				}
			})
		} else {
			setInputState(() => {
				return {
					value: editParams.notes,
					type: 'notes',
				}
			})
		}
	}, [])

	const handleSubmit = (e) => {
		e.preventDefault()
		if (e.target.innerHTML === 'Cancel') {
			editParams.onClick('cancel')
		} else {
			const currentAccount = user.transactions.accounts.find(
				(account) => account.transactionId === id
			)
			const currrentTransaction = currentAccount.transactions.find(
				(transaction) => transaction.identifier === editParams.transactionId
			)

			const data = {
				inpuState,
				transactionId: editParams.transactionId,
				accountId: id,
			}
			editParams.onClick('save')
			console.log(data)
		}
	}

	const handleChange = (e) => {
		const newValue = e.value
		setInputState((previous) => {
			return {
				...previous,
				value: newValue,
			}
		})
	}

	return (
		<form style={formStyle}>
			<Input
				inputParams={{
					type: 'text',
					value: inpuState.value,
					onChange: handleChange,
				}}
			/>
			<Button
				style={{ padding: '2px' }}
				btnParams={{
					onClick: handleSubmit,
					text: 'Cancel',
					className: 'edit-button-outline trans-edit',
				}}
			/>
			<Button
				btnParams={{
					onClick: handleSubmit,
					text: 'Save',
					className: 'edit-button-outline  trans-edit',
				}}
			/>
		</form>
	)
}

export default EditTransaction
