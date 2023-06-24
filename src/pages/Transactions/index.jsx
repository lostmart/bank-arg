import { useSelector, useDispatch } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import Section from '../../components/UI/organisms/Section'
import { useEffect, useState } from 'react'

import { fetchUserThunk } from '../../features/userSlice'
import { fetchTransactionThunk } from '../../features/transactionSlice'

import { FaChevronDown } from 'react-icons/fa'

import styles from './index.module.css'
import Title from '../../components/UI/atoms/Title'
import Table from '../../components/UI/organisms/Table'

const Transactions = () => {
	const dispatch = useDispatch()
	const user = useSelector((state) => state.user)
	const transactions = useSelector((state) => state.transactions)
	const { id } = useParams()

	// const [selectedAccount, setSelectedAccount] = useState(null)

	// useEffect(() => {
	// 	dispatch(fetchUserThunk())
	// 	dispatch(fetchTransactionThunk())
	// }, [])

	if (transactions.data) {
		const selectedAccount =
			transactions.data[1].userTransactions.accounts.filter(
				(account) => account.transactionId === id
			)[0]
		return (
			<main className="main bg-dark">
				<Section className={styles.transaction}>
					<Title
						text={`${selectedAccount.title} (${id})`}
						nameOfClass={styles.transaction_title}
						titleElement="h2"
					/>
					<Title
						text={`$ ${selectedAccount.transactions[0].balance}`}
						nameOfClass={styles.transaction_title}
						titleElement="h3"
					/>
					<span>Available Balance</span>
				</Section>
				<Section>
					<Table />
				</Section>
			</main>
		)
	} else {
		return <Navigate to="/login" />
	}
}

export default Transactions
