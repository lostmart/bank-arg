import { FaChevronDown } from 'react-icons/fa'

const Table = () => {
	const handleEditClick = () => {
		console.log('clicking ...')
	}
	return (
		<table className="table">
			<thead>
				<tr className="table_header">
					<th></th>
					<th>DATE</th>
					<th>DESCRIPTION</th>
					<th>AMOUNT</th>
					<th>BALANCE</th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<td role="button" onClick={handleEditClick} className="table_expand">
						<FaChevronDown style={{transform: 'translateY(3px)'}} />
					</td>
					<td>June 20th, 2023</td>
					<td>Golden Bankery</td>
					<td>$ 5.00</td>
					<td>$ 2850.12</td>
				</tr>
			</tbody>
		</table>
	)
}

export default Table
