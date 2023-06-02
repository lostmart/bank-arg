import { PropTypes } from 'prop-types'
/**
 * @prop {string} nameOfClass
 * @prop {string} children
 * @returns
 */
const Section = ({ children, nameOfClass }) => {
	return <section className={nameOfClass}>{children}</section>
}

Section.propTypes = {
	/**
	 * @prop {string} - nameOfClass
	 * @see {@link http://github.com|GitHub}
	 * nameOfClass(optional) - if no props passed, it'll provide a "paragraph" class
	 * @prop {object | array} - children { html elements } ( one or more elements )
	 * @returns { React.JSX.Element } - html section element
	 */
	children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export default Section
