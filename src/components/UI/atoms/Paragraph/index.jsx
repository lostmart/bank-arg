import PropTypes from 'prop-types'

const Paragraph = ({ nameOfClass, text }) => {
	return <p className={nameOfClass ? nameOfClass : 'paragraph'}>{text}</p>
}

Paragraph.propTypes = {
	/**
	 *
	 * @prop {object} btnParams - { nameOfClass & text }
	 * nameOfClass(optional) - if no props passed, it'll provide a "paragraph" class
	 */
	btnParams: PropTypes.objectOf(PropTypes.string),
}

export default Paragraph
