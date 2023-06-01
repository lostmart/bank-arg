import PropTypes from 'prop-types'

const Label = ({ labelParams }) => {
    return <label htmlFor={labelParams.for}>{labelParams.text}</label>
}

Label.propTypes = {
	labelParams: PropTypes.object,
}

export default Label
