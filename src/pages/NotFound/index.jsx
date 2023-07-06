import { Link } from 'react-router-dom'

/*  organisms  */
import Hero from '../../components/UI/organisms/Hero'
import Section from '../../components/UI/organisms/Section'

/* atoms  */
import Paragraph from '../../components/UI/atoms/Paragraph'
import Button from '../../components/UI/atoms/Button'

const NotFound = () => {
	return (
		<Hero>
			<Section className="hero-content not-found">
				<Paragraph nameOfClass="subtitle" text="Error 404" />
				<Paragraph nameOfClass="subtitle" text="Page Not found" />
				<Link to="/">
					<Button
						btnParams={{
							className: 'transaction-button',
							text: 'Home',
							onClick: () => null,
						}}
					/>
				</Link>
			</Section>
		</Hero>
	)
}

export default NotFound
