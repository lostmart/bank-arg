import { useRef, useState } from 'react'
import { FaChevronUp, FaPencilAlt } from 'react-icons/fa'
import EditTransaction from '../../molecules/EditTransaction'

/* utils  */
import dateFormat from '../../../../utils/dateFormat'
import dollarsFormat from '../../../../utils/dollaresFormat'
import { useParams } from 'react-router-dom'

/*  mini comp  */
const TransactionContent = ({ children }) => {
	return children
}

const Accordion = ({ transaction }) => {
	// console.log(transaction)
	const panel = useRef(null)

	const [editMode, setEditMode] = useState({
		category: false,
		notes: false,
	})

	const [category, setCategory] = useState(transaction.category)
	const [notes, setNotes] = useState(transaction.notes)

	/*  methods  */
	const handleEditClick = (val) => {
		setEditMode(() => {
			if (val === 'category') {
				return {
					category: true,
					notes: false,
				}
			} else if (val === 'notes') {
				return {
					category: false,
					notes: true,
				}
			} else {
				return {
					category: false,
					notes: false,
				}
			}
		})
	}

	const handleClick = () => {
		if (panel.current.style.maxHeight) {
			panel.current.style.maxHeight = null
		} else {
			panel.current.style.maxHeight = panel.current.scrollHeight + 'px'
		}
	}

	return (
		<div>
			<button onClick={handleClick} className="accordion">
				<span>
					<FaChevronUp />
				</span>
				<span>{dateFormat(transaction.date)}</span>
				<span> {transaction.description}</span>
				<span>$ {dollarsFormat(transaction.amount)}</span>
				<span>$ {dollarsFormat(transaction.balance)}</span>
			</button>
			<div ref={panel} className="panel">
				<ul>
					<li>Transaction Type: {transaction.transactionType}</li>
					<li>
						Category:
						{!editMode.category ? (
							<TransactionContent>
								{category}
								<button
									className="panel_edit"
									onClick={() => handleEditClick('category')}>
									<FaPencilAlt />
								</button>
							</TransactionContent>
						) : (
							<EditTransaction
								editParams={{
									onClick: handleEditClick,
									category,
									transactionId: transaction.identifier,
								}}
							/>
						)}
					</li>
					<li>
						Notes:
						{!editMode.notes ? (
							<TransactionContent>
								{notes}
								<button
									className="panel_edit"
									onClick={() => handleEditClick('notes')}>
									<FaPencilAlt />
								</button>
							</TransactionContent>
						) : (
							<EditTransaction
								editParams={{
									onClick: handleEditClick,
									notes,
									transactionId: transaction.identifier,
								}}
							/>
						)}
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Accordion
