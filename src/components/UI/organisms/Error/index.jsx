import { useSelector } from 'react-redux'
import AlerIcon from '../../atoms/Alert/AlerIcon'

import styles from './index.module.css'

const Error = () => {
	const user = useSelector((state) => state.user)

	return (
		<main className="main bg-dark">
			<div className={styles.modal}>
				<div className={styles['modal-content']}>
					<span role="button" className={styles.close}>
						&times;
					</span>
					<div className={styles.alert_cont}>
						<AlerIcon />
					</div>
					<pre style={{ fontSize: '1.4em' }}>{user.error}</pre>
				</div>
			</div>
		</main>
	)
}

export default Error
