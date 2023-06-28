import { useState } from 'react'
import { FaChevronUp, FaPencilAlt } from 'react-icons/fa'
import Input from '../../atoms/Input'
import Accordion from '../Accordion'

/*  utils  */
import dateFormat from '../../../../utils/dateFormat'
import dollarsFormat from '../../../../utils/dollaresFormat'

const TransactionContent = ({ children }) => {
	return children
}

const Table = ({ transactions }) => {
	const [editMode, setEditMode] = useState({
		category: false,
		notes: false,
	})

	/*   sub-componetns  */

	const TransactionRender = () => {
		return transactions.map((transaction, i) => {
			return (
				<>
					<tr key={i} className="expand">
						<td
							role="button"
							onClick={handleExpandClick}
							className="table_expand_btn">
							<FaChevronUp />
						</td>
						<td>{dateFormat(transaction.date)}</td>
						<td>{transaction.description}</td>
						<td>$ {dollarsFormat(transaction.amount)}</td>
						<td>$ {dollarsFormat(transaction.balance)}</td>
					</tr>
					<tr>
						<td className="expanded_details"></td>
						<td colSpan="4" className="panel expanded_details">
							<ul>
								<li>Transaction Type: Electronic</li>
								<li>
									Category:
									{!editMode.category ? (
										<TransactionContent>
											Food
											<button onClick={() => handleEditClick('category')}>
												<FaPencilAlt />
											</button>
										</TransactionContent>
									) : (
										<Input inputParams={{ type: 'text' }} />
									)}
								</li>
								<li>
									Notes:
									{!editMode.notes ? (
										<TransactionContent>
											<button onClick={() => handleEditClick('notes')}>
												<FaPencilAlt />
											</button>
										</TransactionContent>
									) : null}
								</li>
							</ul>
						</td>
					</tr>
				</>
			)
		})
	}

	/* methods   */

	const handleExpandClick = () => {
		console.log('running ...')
	}
	const handleEditClick = (val) => {
		setEditMode((prev) => {
			if (val === 'category') {
				return {
					category: true,
					notes: false,
				}
			} else {
				return {
					category: false,
					notes: true,
				}
			}
		})
		console.log(editMode)
	}
	return (
		<section className="table">
			<h3 style={{ display: 'flex', justifyContent: 'space-around' }}>
				<span>DATE</span>
				<span>DESCRIPTION</span>
				<span>AMOUNT</span>
				<span>BALANCE</span>
			</h3>
			<Accordion />
		</section>
	)
}

export default Table
