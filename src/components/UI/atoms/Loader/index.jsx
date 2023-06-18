import React from 'react'
import styles from './index.module.css'

const Loader = () => {
	const spotsLoader = [1, 2, 3, 4, 5, 6, 7, 8]
	return (
		<div className={styles['dot-spinner']}>
			{spotsLoader.map((spot) => (
				<div key={spot} className={styles['dot-spinner__dot']}></div>
			))}
		</div>
	)
}

export default Loader
