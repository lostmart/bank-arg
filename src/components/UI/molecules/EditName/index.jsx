import Button from '../../atoms/Button'
import Input from '../../atoms/Input'

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
			<div className="edit-name-form-cont">
				<div className="input-wrapper input-name">
					<Input inputParams={{ type: 'text', value: editData.firstName }} />
					<Button
						btnParams={{
							className: 'edit-button-outline',
							text: 'Save',
							onClick: handleClick,
						}}
					/>
				</div>
				<div className="input-wrapper input-name">
					<Input inputParams={{ type: 'text', value: editData.lastName }} />
					<Button
						btnParams={{
							className: 'edit-button-outline',
							text: 'Cancel',
							onClick: handleCancelClick,
						}}
					/>
				</div>
			</div>
		</form>
	)
}

export default EditName
