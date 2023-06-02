import PropTypes from 'prop-types'

const Paragraph = ({ nameOfClass, text }) => {
	return <p className={nameOfClass ? nameOfClass : 'paragraph'}>{text}</p>
}

Paragraph.propTypes = {
	/**
	 *
	 * @prop {string} btnParams - nameOfClass
	 * nameOfClass(optional) - if no props passed, it'll provide a "paragraph" class
	 * @prop {string} text - text to print on the page
	 */
	btnParams: PropTypes.string
}

export default Paragraph
