import Input from '../../atoms/Input'
import Button from '../../atoms/Button'

const EditTransaction = ({ editParams }) => {
	const formStyle = {
		display: 'flex',
		gap: '10px',
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (e.target.innerHTML === 'Cancel') {
			console.log('anulalo !!')
			editParams.onClick('cancel')
		} else {
			console.log('savealo')
		}
	}

	return (
		<form style={formStyle}>
			<Input inputParams={{ type: 'text' }} />
			<Button
				btnParams={{
					onClick: handleSubmit,
					text: 'Cancel',
					className: 'edit-button-outline',
				}}
			/>
			<Button
				btnParams={{
					onClick: handleSubmit,
					text: 'Save',
					className: 'edit-button-outline',
				}}
			/>
		</form>
	)
}

export default EditTransaction
