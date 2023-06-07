import PropTypes from 'prop-types'

const Button = ({ btnParams }) => {
	return <button className={btnParams.className}>{btnParams.text}</button>
}

Button.propTypes = {
	/**
	 *
	 * @prop {object} btnParams - { className & text }
	 */
	btnParams: PropTypes.objectOf(PropTypes.string),
}

Button.defaultProps = {
	btnParams: {
		className: 'btn',
	},
}

export default Button
