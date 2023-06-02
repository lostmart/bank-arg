/*  organisms  */
import Hero from '../../components/UI/organisms/Hero'
import Section from '../../components/UI/organisms/Section' // Props: nameofClass & children

/* molecules  */
import Card from '../../components/UI/organisms/Card'

/* atoms  */
import Title from '../../components/UI/atoms/Title'
import Paragraph from '../../components/UI/atoms/Paragraph'
import Image from '../../components/UI/atoms/Image'

/* assets  */
import iconChat from '../../assets/img/icon-chat.png'
import iconMoney from '../../assets/img/icon-money.png'
import iconSecurity from '../../assets/img/icon-security.png'

const Home = () => {
	const cardsArray = [
		{
			imageUrl: iconChat,
			altTxt: 'chat icon',
			title: 'You are our #1 priority',
			note: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
		},
		{
			imageUrl: iconMoney,
			altTxt: 'money icon',
			title: 'More savings means higher rates',
			note: 'The more you save with us, the higher your interest rate will be!',
		},
		{
			imageUrl: iconSecurity,
			altTxt: 'shield icon',
			title: 'More savings means higher rates',
			note: 'We use top of the line encryption to make sure your data and money is always safe.',
		},
	]

	const renderCards = () => {
		return cardsArray.map((card) => {
			return (
				<Card nameOfClass="feature-item">
					<Image
						imgParams={{
							src: card.imageUrl,
							nameOfClass: 'feature-icon',
							alt: card.altTxt,
						}}
					/>
					<Title
						nameOfClass="feature-item-title"
						text="Promoted Content"
						titleElement="h3"
					/>

					<Paragraph text={card.note} />
				</Card>
			)
		})
	}

	return (
		<main className="main">
			<Hero />
			<Section nameOfClass="features">
				<Title nameOfClass="sr-only" text="Features" titleElement="h2" />
				{renderCards()}
			</Section>
		</main>
	)
}

export default Home
