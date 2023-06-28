import { useRef, useState } from 'react'
import { FaChevronUp, FaPencilAlt } from 'react-icons/fa'
import EditTransaction from '../../molecules/EditTransaction'

/*  mini comp  */
const TransactionContent = ({ children }) => {
	return children
}

const Accordion = () => {
	const panel = useRef(null)

	const [editMode, setEditMode] = useState({
		category: false,
		notes: false,
	})

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
				<span>June 7th, 2023</span>
				<span>Lorem ipsum dolor</span>
				<span>$ 400.00</span>
				<span>$ 2,000.21</span>
			</button>
			<div ref={panel} className="panel">
				<ul>
					<li>Transaction Type: Electric</li>
					<li>
						Category:
						{!editMode.category ? (
							<TransactionContent>
								Food
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
								}}
							/>
						)}
					</li>
					<li>
						Notes:
						{!editMode.notes ? (
							<TransactionContent>
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
