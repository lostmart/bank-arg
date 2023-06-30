import { useState } from 'react'
import Accordion from '../Accordion'


const Table = ({ transactions }) => {
	// console.log(transactions)
	const [editMode, setEditMode] = useState({
		category: false,
		notes: false,
	})

	/*   sub-componetns  */

	const TransactionRender = () => {
		return transactions.map((transaction, i) => {
			return <Accordion key={i} transaction={transaction} />
		})
	}
	return (
		<section className="table">
			<h3 style={{ display: 'flex', justifyContent: 'space-around' }}>
				<span>DATE</span>
				<span>DESCRIPTION</span>
				<span>AMOUNT</span>
				<span>BALANCE</span>
			</h3>
			<TransactionRender />
		</section>
	)
}

export default Table
