import { PropTypes } from 'prop-types'

const Card = ({ children, nameOfClass }) => {
	return (
		<article className={nameOfClass ? nameOfClass : 'article'}>
			{children}
		</article>
	)
}

Card.propTypes = {
	/**
	 * @prop {string} - nameOfClass
	 * nameOfClass(optional) - if no props passed, it'll provide a "paragraph" class
	 * @prop {object | array} - children { html elements } ( one or more elements )
	 * @returns { React.JSX.Element } - html article element
	 */
	children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export default Card
