import PropTypes from 'prop-types'

const Input = ({ inputParams }) => {
	const handleChange = (e) => {
		const inputValue = e.target
		inputParams.onChange(inputValue)
	}

	return (
		<input
			type={inputParams.type}
			id={inputParams.inputId}
			value={inputParams.value}
			onChange={handleChange}
		/>
	)
}

Input.propTypes = {
	inputParams: PropTypes.object,
}

export default Input
