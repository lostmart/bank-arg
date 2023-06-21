import PropTypes from 'prop-types'

const Button = ({ btnParams }) => {
	const handleClick = (e) => {
		btnParams.onClick(e)
	}

	return (
		<button onClick={handleClick} className={btnParams.className}>
			{btnParams.text}
		</button>
	)
}

Button.propTypes = {
	/**
	 *
	 * @prop {object} btnParams - { className, text & a function }
	 */
	btnParams: PropTypes.object,
}

Button.defaultProps = {
	btnParams: {
		className: 'btn',
		onClickFn: null,
	},
}

export default Button
