import React from 'react';
import './Schedule.css';
// Components
import Column from '../Column/Column';

const Schedule = ({ schedule, curSunday }) => {
	console.log(curSunday);
	const filterByDay = (day, entry) => new Date(entry.start).getDay() === day;
	const addStatus = (status, lesson) => ({ ...lesson, status });
	// TODO: produce week worth of dates based on curSunday.

	return (
		<div className='schedule-container'>
			{[0, 1, 2, 3, 4, 5, 6].map((day) => (
				<Column
					key={day}
					day={day}
					available={schedule.available
						.filter(filterByDay.bind(null, day))
						.map(addStatus.bind(null, 'available'))}
					booked={schedule.booked
						.filter(filterByDay.bind(null, day))
						.map(addStatus.bind(null, 'booked'))}
				/>
			))}
		</div>
	);
};

export default Schedule;
