import { useSelector, useDispatch } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import Section from '../../components/UI/organisms/Section'

import { FaChevronDown } from 'react-icons/fa'

import styles from './index.module.css'

const Transactions = () => {
	const transactions = useSelector((state) => state.transactions)
	const { id } = useParams()

	/**
	 * check if there is data transactions
	 * pushes the user to log in if none
	 */
	if (!transactions.data) {
		return <Navigate to="/login" />
	}

	const selectedAccount = transactions.data[1].userTransactions.accounts.filter(
		(account) => account.transactionId === id
	)[0]

	console.log(selectedAccount)

	return (
		<main className="main bg-dark">
			<Section className={styles.transaction}>
				<h2 className={styles.transaction_title}>
					{selectedAccount.title} ({id}){' '}
				</h2>
				<h3>$ {selectedAccount.transactions[0].balance}</h3>
				<span>Available Balance</span>
			</Section>
			<Section>
				<table className={styles.table}>
					<thead>
						<th></th>
						<th>DATE</th>
						<th>DESCRIPTION</th>
						<th>AMOUNT</th>
						<th>BALANCE</th>
					</thead>
					<tbody>
						<tr>
							<td>
								<FaChevronDown />
							</td>
							<td>June 20th, 2023</td>
							<td>Golden Bankery</td>
							<td>$ 5.00</td>
							<td>$ 2850.12</td>
						</tr>
					</tbody>
				</table>
			</Section>
		</main>
	)
}

export default Transactions
