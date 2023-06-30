import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Section from '../../components/UI/organisms/Section'
import { useEffect } from 'react'

import { fetchUserThunk } from '../../features/userSlice'

import styles from './index.module.css'
import Title from '../../components/UI/atoms/Title'
import Table from '../../components/UI/organisms/Table'

import { setUserError } from '../../features/userSlice'

const Transactions = () => {
	const dispatch = useDispatch()
	const user = useSelector((state) => state.user)
	const { id } = useParams()

	useEffect(() => {
		dispatch(fetchUserThunk())
	}, [])

	if (user.data) {
		const selectedAccount = user.transactions.accounts.find(
			(account) => account.transactionId === id
		)
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
				<div>
					<Table transactions={selectedAccount.transactions} />
				</div>
			</main>
		)
	} else {
		dispatch(setUserError('Log in again, please'))
	}
}

export default Transactions
