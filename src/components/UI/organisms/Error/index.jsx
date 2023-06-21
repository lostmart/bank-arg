import { useSelector, useDispatch } from 'react-redux'
import AlerIcon from '../../atoms/Alert/AlerIcon'
import { resetUserError } from '../../../../features/userSlice'
import { useNavigate } from 'react-router-dom'


import styles from './index.module.css'

const Error = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const user = useSelector((state) => state.user)

	const closeModal = () => {
		dispatch(resetUserError())
		navigate('/login')
	}

	return (
		<main className="main bg-dark">
			<div className={styles.modal}>
				<div className={styles['modal-content']}>
					<span onClick={closeModal} role="button" className={styles.close}>
						&times;
					</span>
					<div className={styles.alert_cont}>
						<AlerIcon />
					</div>
					<p className={styles.paragraph}>Something went wrong.</p>
					<p className={styles.paragraph}>Please, login again</p>
					<pre className={styles.pre_text}>{user.error}</pre>
				</div>
			</div>
		</main>
	)
}

export default Error
