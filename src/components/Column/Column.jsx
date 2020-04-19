import React from 'react';
import './Column.css';
import { getHoursInMinutes, formatMinutes } from '../../helpers';

const Column = ({ day, available, booked }) => {
	const processTimeRange = ({ start, end, status }) => {
		const res = [];
		//FIXME: Add one hour to match test case.
		start = getHoursInMinutes(start) + 60;
		end = getHoursInMinutes(end) + 60;
		for (let time = start; time < end; time += 30) {
			res.push(
				<div
					key={time}
					style={{
						color: status === 'available' ? '#02cab9' : 'inherit',
					}}
				>
					{formatMinutes(time)}
				</div>
			);
		}
		return res;
	};

	const lessons = [...available, ...booked];
	console.log(lessons);

	return (
		<div className='column-container'>
			<h1>{day}</h1>
			{lessons
				.sort((a, b) => new Date(a.start) - new Date(b.start))
				.map(processTimeRange)}
		</div>
	);
};

export default Column;
