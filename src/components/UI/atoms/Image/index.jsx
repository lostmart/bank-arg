import { PropTypes } from 'prop-types'

const Image = ({ imgParams }) => {
	return (
		<img
			className={imgParams.nameOfClass ? imgParams.nameOfClass : 'image'}
			src={imgParams.src}
			alt={imgParams.alt}
		/>
	)
}

Image.propTypes = {
	/**
	 *
	 * @prop {object} imgParams - { nameOfClass,  src, alt text }
	 */
	imgParams: PropTypes.objectOf(PropTypes.string),
}

export default Image
