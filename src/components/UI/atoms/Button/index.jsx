import PropTypes from 'prop-types'

const Button = ({ btnParams }) => {
	return <button className={btnParams.nameOfClass}>{btnParams.text}</button>
}

Button.propTypes = {
	/**
	 *
	 * @prop {object} btnParams - { nameOfClass & text }
	 */
	btnParams: PropTypes.objectOf(PropTypes.string),
}

export default Button
