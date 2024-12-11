import styles from './App.module.css';
import data from './data.json';
import { useState } from 'react';

export const App = () => {
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	const isFirstStep = activeIndex === 0;
	const isLastStep = activeIndex === steps.length - 1;

	const onClickForward = () => {
		if (activeIndex < steps.length - 1) {
			setActiveIndex((updatedIndex) => updatedIndex + 1);
		}
	};

	const onClickBackward = () => {
		if (activeIndex !== steps[0]) {
			setActiveIndex((updatedIndex) => updatedIndex - 1);
		}
	};

	const onClickBeginAgain = () => {
		setActiveIndex(0);
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{steps.map(({ id }, index) => (
							<li
								key={id}
								className={`${styles['steps-item']} ${
									activeIndex === index ? styles.active : ''
								} ${index < activeIndex ? styles.done : ''}`}
							>
								<button
									className={styles['steps-item-button']}
									onClick={() => setActiveIndex(index)}
								>
									{index + 1}
								</button>
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							disabled={activeIndex === 0}
							onClick={onClickBackward}
						>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={isLastStep ? onClickBeginAgain : onClickForward}
						>
							{!isLastStep ? 'Далее' : 'Начать сначала'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
