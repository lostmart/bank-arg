/**
 * Represents a transaction.
 * @class
 */

class Transaction {
	/**
	 * Creates an instance of Transaction.
	 * @constructor
	 * @param {Object} transactionData - The object containing transaction data
	 * @param {string} transactionData.date - The date of the transaction
	 * @param {string} transactionData.description - The description of the transaction
	 * @param {number} transactionData.amount - The amount of the transaction
	 * @param {number} transactionData.balance - The balance after the transaction
	 */
	constructor({ date, description, amount, balance }) {
		this.date = new Date(date) ?? null
		this.description = description ?? null
		this.amount = amount ?? null
		this.balance = balance ?? null
	}
}
