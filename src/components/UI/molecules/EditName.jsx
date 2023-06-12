import Button from '../atoms/Button'
import Input from '../atoms/Input'

const EditName = ({ editData }) => {
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
					btnParams={{ className: 'edit-button-outline', text: 'Save' }}
				/>
				<Button
					btnParams={{ className: 'edit-button-outline', text: 'Cancel' }}
				/>
			</div>
		</form>
	)
}

export default EditName
