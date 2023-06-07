import PropTypes from 'prop-types'

/**
 * Hero component
 * @component
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The children elements of the hero.
 * @returns {JSX.Element} - The rendered hero element.
 */

const Hero = ({ children }) => {
	return <div className="hero">{children}</div>
}

Hero.propTypes = {
	/**
	 * The children elements of the hero.
	 * It can be a single React element or an array of React elements.
	 *
	 * @type {ReactNode}
	 */

	children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export default Hero
