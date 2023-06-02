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
			<Section nameOfClass="hero-content">
				<Paragraph nameOfClass="subtitle" text="Error 404" />
				<Paragraph nameOfClass="subtitle" text="Page Not found" />
				<Link to="/">
					<Button
						btnParams={{ nameOfClass: 'transaction-button', text: 'Home' }}
					/>
				</Link>
			</Section>
		</Hero>
	)
}

export default NotFound
