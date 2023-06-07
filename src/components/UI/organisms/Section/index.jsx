import { PropTypes } from 'prop-types'
/**
 ** Section component
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.className - The CSS class name for the section (optional). Defaults to "paragraph".
 * @param {ReactNode} props.children - The children elements of the section.
 * @returns {JSX.Element} - The rendered section element.
 */
const Section = ({ children, className }) => {
	return <section className={className}>{children}</section>
}

Section.propTypes = {
	children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

Section.defaultProps = {
	className: 'paragraph',
}

export default Section
