import React from 'react';
import './Controls.css';
import { THIS_SUNDAY_DATE } from '../../constants';

const Controls = ({ curSunday, setCurSunday }) => {
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
			<button id='left' onClick={handleClick} disabled={curSunday.date === THIS_SUNDAY_DATE}>
				left
			</button>
			<button id='right' onClick={handleClick}>
				right
			</button>
		</div>
	);
};

export default Controls;
