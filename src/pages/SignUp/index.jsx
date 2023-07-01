import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

/*   atoms    */
import Input from '../../components/UI/atoms/Input' // Props:  type | id
import Label from '../../components/UI/atoms/Label' // Props: text | id (for)
import Button from '../../components/UI/atoms/Button'

const SignUp = () => {
	/*  local State  */
	const [userDetails, setUserDetails] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		error: false,
	})
	const [axiosRes, setAxiosRes] = useState(null)

	/* methods  */
	const handleTextInput = (e) => {
		if (e.id === 'First Name') {
			setUserDetails((prev) => {
				return {
					...prev,
					firstName: e.value,
				}
			})
		} else if (e.id === 'Last Name') {
			setUserDetails((prev) => {
				return {
					...prev,
					lastName: e.value,
				}
			})
		} else if (e.id === 'email') {
			setUserDetails((prev) => {
				return {
					...prev,
					email: e.value,
				}
			})
		} else if (e.id === 'password') {
			setUserDetails((prev) => {
				return {
					...prev,
					password: e.value,
				}
			})
		}
	}
	const handleSubmit = async (e) => {
		e.preventDefault()
		/* check empty  */
		if (
			userDetails.firstName === '' ||
			userDetails.lastName === '' ||
			userDetails.email === '' ||
			userDetails.password === ''
		) {
			setUserDetails((prev) => {
				return {
					...prev,
					error: true,
				}
			})
			return
		} else {
			setUserDetails((prev) => {
				return {
					...prev,
					error: false,
				}
			})

			try {
				const url = 'http://localhost:3001/api/v1/user/signup'
				const res = await axios.post(url, userDetails)
				if (res.status === 200) {
					setAxiosRes(() => {
						return {
							msg: res.data.message,
						}
					})
				}
			} catch (err) {
				console.log(err.response.data.message)
				setAxiosRes(() => {
					return {
						msg: err.response.data.message,
					}
				})
			}
		}
	}

	const nameInputParams = {
		type: 'text',
		inputId: 'First Name',
		value: userDetails.firstName,
		onChange: handleTextInput,
	}

	const lastNameInputParams = {
		type: 'text',
		inputId: 'Last Name',
		value: userDetails.lastName,
		onChange: handleTextInput,
	}

	const emailInputParams = {
		type: 'email',
		inputId: 'email',
		value: userDetails.email,
		onChange: handleTextInput,
	}

	const passwordInputParams = {
		type: 'password',
		inputId: 'password',
		value: userDetails.password,
		onChange: handleTextInput,
	}

	/* render fn   */

	const RenderError = () => {
		return (
			<main className="main bg-dark">
				<section className="sign-up-content">
					<h2>{axiosRes.msg} </h2>
					<p style={{marginTop:"2em"}}>
						<Link to="/login">Log In</Link>
					</p>
				</section>
			</main>
		)
	}

	if (axiosRes) return <RenderError />

	return (
		<main className="main bg-dark">
			<section className="sign-up-content">
				<h2>Sign up</h2>
				<p>Create an account</p>
				<form>
					<div className="input-wrapper">
						<Label
							labelParams={{ for: nameInputParams.inputId, text: 'First Name' }}
						/>
						<Input inputParams={nameInputParams} />
					</div>

					<div className="input-wrapper">
						<Label
							labelParams={{
								for: lastNameInputParams.inputId,
								text: 'Last Name',
							}}
						/>
						<Input inputParams={lastNameInputParams} />
					</div>

					<div className="input-wrapper">
						<Label
							labelParams={{
								for: emailInputParams.inputId,
								text: 'Email',
							}}
						/>
						<Input inputParams={emailInputParams} />
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
					<div>
						<p>
							Already a memeber? <Link to="/login">Log In</Link>
						</p>
					</div>

					<Button
						btnParams={{
							text: 'Sign In',
							className: 'sign-in-button',
							onClick: handleSubmit,
						}}
					/>
					{userDetails.error && (
						<span className="error">Please, fill out all required fields</span>
					)}
				</form>
			</section>
		</main>
	)
}

export default SignUp
