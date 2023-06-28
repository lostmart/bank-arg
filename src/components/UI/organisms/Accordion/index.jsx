import { useRef, useState } from 'react'
import { FaChevronUp, FaPencilAlt } from 'react-icons/fa'
import Input from '../../atoms/Input'

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
						<button>
							<FaPencilAlt />
						</button>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Accordion
