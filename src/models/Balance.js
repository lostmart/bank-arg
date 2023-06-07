/**
 * Represents the balance of a user with checking, savings, and credit card accounts.
 * @class
 */
class UserBalance {
	/**
	 * Creates an instance of UserBalance
	 * @constructor
	 * @param {Object} balanceData - The object containing user balance data
	 * @param {string} balanceData.userId - The ID of the user
	 * @param {Object} balanceData.checkingAccount - The checking account details
	 * @param {string} balanceData.checkingAccount.id - The ID of the checking account
	 * @param {number} balanceData.checkingAccount.amount - The amount in the checking account
	 * @param {Object} balanceData.savingsAccount - The savings account details
	 * @param {string} balanceData.savingsAccount.id - The ID of the savings account
	 * @param {number} balanceData.savingsAccount.amount - The amount in the savings account
	 * @param {Object} balanceData.creditCardAccount - The credit card account details
	 * @param {string} balanceData.creditCardAccount.id - The ID of the credit card account
	 * @param {number} balanceData.creditCardAccount.amount - The amount in the credit card account
	 */

	constructor({ userId, checkingAccount, savingsAccount, creditCardAccount }) {
		this.userId = userId ?? null

		if (checkingAccount) {
			this.checkingAccount = {
				id: checkingAccount.id ?? null,
				amount: checkingAccount.amount ?? null,
			}
		} else {
			this.checkingAccount = null
		}

		if (savingsAccount) {
			this.savingsAccount = {
				id: savingsAccount.id ?? null,
				amount: savingsAccount.amount ?? null,
			}
		} else {
			this.savingsAccount = null
		}

		if (creditCardAccount) {
			this.creditCardAccount = {
				id: creditCardAccount.id ?? null,
				amount: creditCardAccount.amount ?? null,
			}
		} else {
			this.creditCardAccount = null
		}
	}
}
