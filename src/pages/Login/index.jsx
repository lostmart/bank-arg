import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { setUserError } from '../../features/userSlice'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

/*   atoms    */
import Input from '../../components/UI/atoms/Input' // Props:  type | id
import Label from '../../components/UI/atoms/Label' // Props: text | id (for)
import Button from '../../components/UI/atoms/Button'

import { fetchUserThunk } from '../../features/userSlice'

const Login = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [userDetails, setUserDetails] = useState({
		email: '',
		password: '',
	})

	const handleNameInput = (e) => {
		setUserDetails((prev) => {
			return {
				...prev,
				email: e.value,
			}
		})
	}

	const handlePassInput = (e) => {
		setUserDetails((prev) => {
			return {
				...prev,
				password: e.value,
			}
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		const url = 'http://localhost:3001/api/v1/user/login'
		try {
			const response = await axios.post(url, userDetails)
			response.status === 200 &&
				sessionStorage.setItem('token', response.data.body.token)
			dispatch(fetchUserThunk())
			navigate('/user')
		} catch (err) {
			sessionStorage.clear()
			err.response
				? dispatch(setUserError(err.response.data.message))
				: dispatch(setUserError(err.message))
		}
	}

	const nameInputParams = {
		type: 'text',
		inputId: 'username',
		value: userDetails.userName,
		onChange: handleNameInput,
	}
	const passwordInputParams = {
		type: 'password',
		inputId: 'password',
		value: userDetails.Pass,
		onChange: handlePassInput,
	}
	const rememberMeInputParams = {
		type: 'checkbox',
		inputId: 'remember-me',
		onChange: () => null,
	}

	return (
		<main className="main bg-dark">
			<section className="sign-in-content">
				<FaUserCircle />
				<h2>Sign in</h2>
				<form>
					<div className="input-wrapper">
						<Label
							labelParams={{ for: nameInputParams.inputId, text: 'Username' }}
						/>
						<Input inputParams={nameInputParams} />
					</div>
					<div className="input-wrapper">
						<Label
							labelParams={{
								for: passwordInputParams.inputId,
								text: 'Password',
							}}
						/>
						<Input inputParams={passwordInputParams} />
					</div>
					<div className="input-remember">
						<Input inputParams={rememberMeInputParams} />
						<Label
							labelParams={{
								for: rememberMeInputParams.inputId,
								text: 'Remember me',
							}}
						/>
					</div>
					<Button
						btnParams={{
							text: 'Sign In',
							className: 'sign-in-button',
							onClick: handleSubmit,
						}}
					/>
				</form>
			</section>
		</main>
	)
}

export default Login
