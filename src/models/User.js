/**
 * Represents a user with profile information
 */
class User {
	/**
	 * Creates a new User instance.
	 * @param {Object} userObject - The object containing user data.
	 * @param {string} userObject.email - The email address of the user
	 * @param {string} userObject.firstName - The first name of the user
	 * @param {string} userObject.lastName - The last name of the user
	 * @param {string} userObject.createdAt - The timestamp when the user was created
	 * @param {string} userObject.updatedAt - The timestamp when the user was last updated
	 * @param {string} userObject.id - The unique identifier of the user
	 */
	constructor({ email, firstName, lastName, createdAt, updatedAt, id }) {
		this.email = email ?? null
		this.firstName = firstName ?? null
		this.lastName = lastName ?? null
		this.createdAt = new Date(createdAt) ?? null
		this.updatedAt = new Date(updatedAt) ?? null
		this.id = id ?? null
	}
}
