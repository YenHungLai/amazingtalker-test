import React from 'react';
import './Schedule.css';
import { changeDate } from '../../helpers';
// Components
import Column from '../Column/Column';

const Schedule = ({ schedule, curSunday }) => {
	console.log(schedule);
	const filterByDay = (day, entry) => new Date(entry.start).getDay() === day;
	const addStatus = (status, lesson) => ({ ...lesson, status });
	let week = [];
	for (let step = 0; step < 7; step++) {
		const nextDay = changeDate(curSunday, step);
		week.push(nextDay);
	}

	return (
		<div className='schedule-container'>
			{week.map((day, index) => (
				<Column
					key={day.date}
					date={day.date}
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
