const dollarsFormat = (number) => {
	if (number % 1 != 0) {
		return number
	} else {
		return number + '.00'
	}
}

export default dollarsFormat
