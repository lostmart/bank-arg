import PropTypes from 'prop-types'

const Input = ({ inputParams }) => {
	return (
		<input
			type={inputParams.type}
			id={inputParams.inputId}
			value={inputParams.value}
		/>
	)
}

// Input.propTypes = {
// 	inputParams: PropTypes.objectOf(
// 		PropTypes.shape({
// 			type: PropTypes.string,
// 			inputId: PropTypes.string,
// 		})
// 	),
// }

Input.propTypes = {
	inputParams: PropTypes.object,
}

export default Input
