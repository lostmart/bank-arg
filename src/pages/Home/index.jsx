import Card from '../../components/UI/molecules/Card'
import Hero from '../../components/UI/organisms/Hero'

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
			altTxt: 'chat icon',
			title: 'More savings means higher rates',
			note: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
		},
		{
			imageUrl: iconSecurity,
			altTxt: 'chat icon',
			title: 'More savings means higher rates',
			note: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
		},
	]

	return (
		<main className="main">
			<Hero />
			<section className="features">
				<h2 className="sr-only">Features</h2>
				<Card cards={cardsArray} />
			</section>
		</main>
	)
}

export default Home
