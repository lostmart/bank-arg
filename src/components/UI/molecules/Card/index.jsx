import React from 'react'
import { PropTypes } from 'prop-types'

const Card = ({ cards }) => {
	const renderCards = () => {
		return cards.map((card, indx) => {
			return (
				<article className="feature-item" key={indx}>
					<img className="feature-icon" src={card.imageUrl} alt={card.altTxt} />
					<h3>{card.title}</h3>
					<p>{card.note}</p>
				</article>
			)
		})
	}

	return renderCards()
}

Card.propTypes = {
	cardDetails: PropTypes.object,
}

export default Card
