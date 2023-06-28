const dateFormat = (dateString) => {
	const options = { year: 'numeric', month: 'long', day: 'numeric' }
	const date = new Date(dateString)
	const formattedDate = date.toLocaleDateString('en-US', options)
	const day = date.getDate()
	let daySuffix

	if (day >= 11 && day <= 13) {
		daySuffix = 'th'
	} else {
		switch (day % 10) {
			case 1:
				daySuffix = 'st'
				break
			case 2:
				daySuffix = 'nd'
				break
			case 3:
				daySuffix = 'rd'
				break
			default:
				daySuffix = 'th'
		}
	}

	const year = date.getFullYear()
	return formattedDate.replace(/\d+/, day + daySuffix).replace(/\d{4}/, year)
}

export default dateFormat
