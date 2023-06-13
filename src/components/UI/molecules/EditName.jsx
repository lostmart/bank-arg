import Button from '../atoms/Button'
import Input from '../atoms/Input'

const EditName = ({ editData }) => {
	const handleClick = (e) => {
		e.preventDefault()
		console.log('saved clicked ... ')
	}

	const handleCancelClick = (e) => {
		e.preventDefault()
		console.log('canceled clicked  ... ')
	}

	return (
		<form className="edit-name-form">
			<div>
				<div className="input-wrapper">
					<Input inputParams={{ type: 'text', value: editData.firstName }} />
				</div>
				<div className="input-wrapper">
					<Input inputParams={{ type: 'text', value: editData.lastName }} />
				</div>
			</div>

			<div>
				<Button
					btnParams={{
						className: 'edit-button-outline',
						text: 'Save',
						onClick: handleClick,
					}}
				/>
				<Button
					btnParams={{
						className: 'edit-button-outline',
						text: 'Cancel',
						onClick: handleCancelClick,
					}}
				/>
			</div>
		</form>
	)
}

export default EditName
