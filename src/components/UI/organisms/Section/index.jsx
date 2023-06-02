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
	children: PropTypes.array,
	nameOfClass: PropTypes.string,
}

export default Section
