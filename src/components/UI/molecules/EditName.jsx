import Input from '../atoms/Input'

const EditName = ({ editData }) => {
	return (
		<form>
			<Input inputParams={{ type: 'text', value: editData.firstName }} />
			<Input inputParams={{ type: 'text', value: editData.lastName }} />
		</form>
	)
}

export default EditName
