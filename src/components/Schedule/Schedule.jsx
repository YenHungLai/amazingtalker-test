import React from 'react';
import './Schedule.css';
// Components
import Column from '../Column/Column';

const Schedule = ({ scheduleData }) => {
	return (
		<div className='schedule-container'>
			<Column />
			<Column />
			<Column />
			<Column />
			<Column />
			<Column />
			<Column />
		</div>
	);
};

export default Schedule;
