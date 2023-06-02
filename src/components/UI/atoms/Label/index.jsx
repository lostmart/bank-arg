import PropTypes from 'prop-types'

const Label = ({ labelParams }) => {
	return <label htmlFor={labelParams.for}>{labelParams.text}</label>
}

Label.propTypes = {
	/**
	 *
	 * @prop {object} labelParams - { for, text }
	 * @returns { JSX.Element } <label>
	 */

	labelParams: PropTypes.objectOf(PropTypes.string),
}

export default Label
