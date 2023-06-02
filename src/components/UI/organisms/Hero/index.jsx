import PropTypes from 'prop-types'

const Hero = ({ children }) => {
	return <div className="hero">{children}</div>
}

Hero.propTypes = {
	/**
	 * @prop {object | array} - children { html elements } ( one or more elements )
	 * @returns { React.JSX.Element } - div element with a static background image and a class="hero"
	 */
	children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export default Hero
