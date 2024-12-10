import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');
	const [isValueValid, setIsValueValid] = useState(true);

	const formatDate = (date) => {
		const day = String(date.getDate()).padStart(2, '0');
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const year = date.getFullYear();
		const hours = String(date.getHours()).padStart(2, '0');
		const minutes = String(date.getMinutes()).padStart(2, '0');
		const seconds = String(date.getSeconds()).padStart(2, '0');

		return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
	};

	const onInputButtonClick = () => {
		const promptValue = prompt('Введите значение').trim();
		if (promptValue.length < 3) {
			setError('Введенное значение должно содержать минимум 3 символа');
			setIsValueValid(false);
		} else {
			setValue(promptValue);
			setError('');
			setIsValueValid(true);
		}
	};

	const onAddButtonClick = () => {
		if (isValueValid && value.trim() !== '') {
			const currentDate = formatDate(new Date());
			setList((updatedList) => [
				...updatedList,
				{ id: Date.now(), value, currentDate },
			]);
			setValue('');
			setError('');
		}
	};

	return (
		<>
			<div className={styles.app}>
				<h1 className={styles['page-heading']}>Ввод значения</h1>
				<p className={styles['no-margin-text']}>
					Текущее значение <code>value</code>: "
					<output className={styles['current-value']}>{value}</output>"
				</p>
				{error !== '' && <div className={styles.error}>{error}</div>}
				<div className={styles['buttons-container']}>
					<button className={styles.button} onClick={onInputButtonClick}>
						Ввести новое
					</button>
					<button
						className={styles.button}
						disabled={!isValueValid}
						onClick={onAddButtonClick}
					>
						Добавить в список
					</button>
				</div>
				<div className={styles['list-container']}>
					<h2 className={styles['list-heading']}>Список:</h2>
					{list.length === 0 ? (
						<p className={styles['no-margin-text']}>
							Нет добавленных элементов
						</p>
					) : (
						<ul className={styles.list}>
							{list.map((item) => (
								<li key={item.id} className={styles['list-item']}>
									{item.value}: {item.currentDate}
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</>
	);
};
