import React from 'react';
import './Schedule.css';
// Components
import Column from '../Column/Column';

const Schedule = ({ schedule, curSunday: { date } }) => {
	const filterByDay = (day, entry) => new Date(entry.start).getDay() === day;
	const addStatus = (status, lesson) => ({ ...lesson, status });
	let week = [];
	// FIXME: 30 or 31 days in this month.
	for (let step = date; step < date + 7; step++) {
		week.push(step);
	}

	return (
		<div className='schedule-container'>
			{week.map((date, index) => (
				<Column
					key={date}
					date={date}
					day={index}
					available={schedule.available
						.filter(filterByDay.bind(null, index))
						.map(addStatus.bind(null, 'available'))}
					booked={schedule.booked
						.filter(filterByDay.bind(null, index))
						.map(addStatus.bind(null, 'booked'))}
				/>
			))}
		</div>
	);
};

export default Schedule;
