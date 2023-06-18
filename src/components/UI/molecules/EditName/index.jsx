import { useState } from 'react'
import Button from '../../atoms/Button'
import Input from '../../atoms/Input'

const EditName = ({ editData }) => {
	const [fullName, setFullName] = useState({
		firstName: editData.firstName,
		lastName: editData.lastName,
	})

	// console.log(editData)
	const handleOnChange = (inputValue) => {
		// editData.handleInputChange(inputValue)
		console.log('running handle change ....', inputValue)
	}
	return (
		<form className="edit-name-form">
			<div className="edit-name-form-cont">
				<div className="input-wrapper input-name">
					<Input
						inputParams={{
							type: 'text',
							value: fullName.firstName,
							onChange: handleOnChange,
						}}
					/>
					<Button
						btnParams={{
							className: 'edit-button-outline',
							text: 'Save',
							onClick: editData.handleClick,
						}}
					/>
				</div>
				<div className="input-wrapper input-name">
					<Input inputParams={{ type: 'text', value: fullName.lastName }} />
					<Button
						btnParams={{
							className: 'edit-button-outline',
							text: 'Cancel',
							onClick: editData.handleClick,
						}}
					/>
				</div>
			</div>
		</form>
	)
}

export default EditName
