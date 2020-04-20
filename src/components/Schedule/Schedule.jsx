import React from 'react';
import './Schedule.css';
import { getNewDate } from '../../helpers';
// Components
import Column from '../Column/Column';

const Schedule = ({ schedule, curSunday }) => {
	const filterByDay = (day, entry) => new Date(entry.start).getDay() === day.getDay();
	const addStatus = (status, lesson) => ({ ...lesson, status });
	let week = [];
	for (let step = 0; step < 7; step++) {
		const nextDay = getNewDate(curSunday, step);
		week.push(nextDay);
	}

	return (
		<div className='schedule-container'>
			{week.map((day) => (
				<Column
					key={day.valueOf()}
					date={day.getDate()}
					day={day.getDay()}
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
