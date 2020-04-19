import React from 'react';
import './Controls.css';
import { THIS_SUNDAY_DATE } from '../../constants';
import { changeDate, isObjectPropertyEqual } from '../../helpers';

const Controls = ({ curSunday, setCurSunday }) => {
	const handleClick = (e) => {
		if (e.target.id === 'left') setCurSunday(changeDate(curSunday, -7));
		else setCurSunday(changeDate(curSunday, 7));
	};

	return (
		<div className='controls-container'>
			<button
				id='left'
				onClick={handleClick}
				disabled={isObjectPropertyEqual(curSunday, THIS_SUNDAY_DATE)}
			>
				<i className='fas fa-chevron-left'></i>
			</button>
			<button id='right' onClick={handleClick}>
				<i className='fas fa-chevron-right'></i>
			</button>
		</div>
	);
};

export default Controls;
