import logo from './logo.svg';
import './App.css';
export const App = () => {
	const year = new Date().getFullYear(); // императивный стиль
	// Далее декларативный стиль:
	return /*#__PURE__*/ React.createElement(
		'div',
		{
			className: 'App',
		},
		/*#__PURE__*/ React.createElement(
			'header',
			{
				className: 'App-header',
			},
			/*#__PURE__*/ React.createElement('img', {
				src: logo,
				className: 'App-logo',
				alt: 'logo',
			}),
			/*#__PURE__*/ React.createElement(
				'p',
				null,
				'Edit ',
				/*#__PURE__*/ React.createElement('code', null, 'src/App.js'),
				' and save to reload.',
			),
			/*#__PURE__*/ React.createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			/*#__PURE__*/ React.createElement(
				'p',
				null,
				'\u0421\u0435\u0439\u0447\u0430\u0441 ',
				year,
				' \u0433\u043E\u0434',
			),
		),
	);
};
