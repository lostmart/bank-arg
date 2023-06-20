import axios from 'axios'

import { useState } from 'react'
import Button from '../../atoms/Button'
import Input from '../../atoms/Input'
import { useNavigate } from 'react-router-dom'

const EditName = ({ editData }) => {
	const navigate = useNavigate()

	/*   inputs changes  - EDIT MOLECULE -    */
	const [localUser, setLocalUser] = useState({
		firstName: editData.firstName,
		lastName: editData.lastName,
	})

	const updateUser = async () => {
		const url = 'http://localhost:3001/api/v1/user/profile'
		const data = {
			firstName: localUser.firstName,
			lastName: localUser.lastName,
		}
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODAyZTc3NmQyMWY5MzlkMDQzZjA1ZiIsImlhdCI6MTY4NzE3ODE4MCwiZXhwIjoxNjg3MjY0NTgwfQ.GQyk_kZ9BxzqRglIaOZSGXHXqO5IgCKr_QqmYF2ypI',
			},
		}
		const updateRes = await axios.put(url, data, config).catch((error) => {
			if (error.response) {
				// The request was made and the server responded with a status code
				// that falls out of the range of 2xx
				// console.log(error.response.data)
				// console.log(error.response.status)
				if (error.response.status === 401) {
					alert('an error acurred and you need to log in again')
					navigate('/login')
				}
			} else if (error.request) {
				// The request was made but no response was received
				// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
				// http.ClientRequest in node.js
				//console.log(error.request)
				console.log('something else ....')
			} else {
				// Something happened in setting up the request that triggered an Error
				//console.log('Error', error.message)
				console.log('something else 2 ...')
			}
		})
		updateRes && editData.handleClick()
	}

	const handleButtonClick = (e) => {
		e.preventDefault()
		const buttonType = e.target.innerHTML
		switch (buttonType) {
			case 'Cancel':
				console.log('cancel ...  ')
				editData.handleClick('cancel')
				break
			case 'Save':
				updateUser()
				break
			default:
				return true
		}
	}

	const handleOnChange = (inputValue) => {
		switch (inputValue.id) {
			case 'f_name':
				setLocalUser((previous) => {
					return { ...previous, firstName: inputValue.value }
				})
				break
			case 'l_name':
				setLocalUser((previous) => {
					return { ...previous, lastName: inputValue.value }
				})

				break
			default:
				return
		}
	}
	return (
		<form className="edit-name-form">
			<div className="edit-name-form-cont">
				<div className="input-wrapper input-name">
					<Input
						inputParams={{
							type: 'text',
							value: localUser.firstName,
							inputId: 'f_name',
							onChange: handleOnChange,
						}}
					/>
					<Button
						btnParams={{
							className: 'edit-button-outline',
							text: 'Save',
							onClick: handleButtonClick,
						}}
					/>
				</div>
				<div className="input-wrapper input-name">
					<Input
						inputParams={{
							type: 'text',
							value: localUser.lastName,
							inputId: 'l_name',
							onChange: handleOnChange,
						}}
					/>
					<Button
						btnParams={{
							className: 'edit-button-outline',
							text: 'Cancel',
							onClick: handleButtonClick,
						}}
					/>
				</div>
			</div>
		</form>
	)
}

export default EditName
