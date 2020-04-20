import React from 'react';
import './Controls.css';
import { THIS_SUNDAY } from '../../constants';
import { changeDate } from '../../helpers';

const Controls = ({ curSunday, setCurSunday }) => {
	const handleClick = (e) => {
		if (e.target.id === 'left') setCurSunday(changeDate(curSunday, -7));
		else setCurSunday(changeDate(curSunday, 7));
	};

	return (
		<div className='controls-container'>
			<button id='left' onClick={handleClick} disabled={curSunday.toString() === THIS_SUNDAY}>
				<i className='fas fa-chevron-left'></i>
			</button>
			<button id='right' onClick={handleClick}>
				<i className='fas fa-chevron-right'></i>
			</button>
		</div>
	);
};

export default Controls;
