import React from 'react';
import './Controls.css';

const Controls = ({ setCurSunday }) => {
	const handleClick = (e) => {
		if (e.target.id === 'left')
			setCurSunday((prevState) => ({
				...prevState,
				date: prevState.date - 7,
			}));
		else
			setCurSunday((prevState) => ({
				...prevState,
				date: prevState.date + 7,
			}));
	};

	return (
		<div className='controls-container'>
			<button id='left' onClick={handleClick}>
				left
			</button>
			<button id='right' onClick={handleClick}>
				right
			</button>
		</div>
	);
};

export default Controls;
