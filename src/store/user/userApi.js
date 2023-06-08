// userApi.js

// Simulating an API call to fetch user data
export const fetchUserData = async () => {
	try {
		const response = await fetch('https://api.example.com/user') // Replace with your actual API endpoint
		if (!response.ok) {
			throw new Error('Failed to fetch user data')
		}
		const userData = await response.json()
		return userData
	} catch (error) {
		throw new Error('Failed to fetch user data: ' + error.message)
	}
}
