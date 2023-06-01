import PropTypes from 'prop-types'

const Button = ({ btnParams }) => {
	return <button className={btnParams.nameOfClass}>{btnParams.text}</button>
}

// Button.propTypes = {
// 	btnParams: PropTypes.objectOf(
// 		PropTypes.shape({
// 			text: PropTypes.string,
// 		})
// 	),
// }

Button.propTypes = {
	btnParams: PropTypes.object,
}

export default Button
