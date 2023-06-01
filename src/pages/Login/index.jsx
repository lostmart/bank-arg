import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

/*   atoms    */
import Input from '../../components/UI/atoms/Input' // Props:  type | id
import Label from '../../components/UI/atoms/Label' // Props: text | id (for)
import Button from '../../components/UI/atoms/Button'

const Login = () => {
	const nameInputRarams = { type: 'text', inputId: 'username' }
	const passwordInputRarams = { type: 'password', inputId: 'password' }
	const rememberMeInputRarams = { type: 'checkbox', inputId: 'remember-me' }

	return (
		<main className="main bg-dark">
			<section className="sign-in-content">
				<FaUserCircle />
				<h2>Sign in</h2>
				<form>
					<div className="input-wrapper">
						<Label
							labelParams={{ for: nameInputRarams.inputId, text: 'Username' }}
						/>
						<Input inputParams={nameInputRarams} />
					</div>
					<div className="input-wrapper">
						<Label
							labelParams={{
								for: passwordInputRarams.inputId,
								text: 'Password',
							}}
						/>
						<Input inputParams={passwordInputRarams} />
					</div>
					<div className="input-remember">
						<Input inputParams={rememberMeInputRarams} />
						<Label
							labelParams={{
								for: rememberMeInputRarams.inputId,
								text: 'Remember me',
							}}
						/>
					</div>
					<Button
						btnParams={{ text: 'Sign In', nameOfClass: 'sign-in-button' }}
					/>
				</form>
			</section>
		</main>
	)
}

export default Login
