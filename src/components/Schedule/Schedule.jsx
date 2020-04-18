import React from 'react';
import './Schedule.css';
// Components
import Column from '../Column/Column';

const Schedule = ({ scheduleData }) => {
	console.log(scheduleData);
	const filterByDay = (day, entry) => new Date(entry.start).getDay() === day;

	return (
		<div className='schedule-container'>
			{[0, 1, 2, 3, 4, 5, 6].map((day) => (
				<Column
					day={day}
					available={scheduleData.available.filter(filterByDay.bind(null, day))}
					booked={scheduleData.booked.filter(filterByDay.bind(null, day))}
				/>
			))}
		</div>
	);
};

export default Schedule;
