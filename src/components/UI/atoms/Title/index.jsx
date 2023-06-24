/**
 * @prop {string} titleElement
 * @prop {string} nameOfClass
 * @prop {string} text
 * @returns
 */
const Title = ({ titleElement, nameOfClass, text }) => {
	const renderTitle = () => {
		let selectedElement
		switch (titleElement) {
			case 'h2':
				selectedElement = <h2 className={nameOfClass}>{text}</h2>
				break
			case 'h3':
				selectedElement = <h3 className={nameOfClass}>{text}</h3>
				break
			case 'h4':
				selectedElement = <h4 className={nameOfClass}>{text}</h4>
				break
			default:
				selectedElement = <h1 className={nameOfClass}>{text}</h1>
		}

		return selectedElement
	}

	return renderTitle()
}

export default Title
