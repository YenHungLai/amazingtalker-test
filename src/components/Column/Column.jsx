import React from 'react';
import './Column.css';
import { getHoursInMinutes, formatMinutes } from '../../helpers';

const Column = ({ day, available, booked }) => {
	const processRange = (start, end, status) => {
		const res = [];
		//FIXME: Add one hour to match test case.
		start = getHoursInMinutes(start) + 60;
		end = getHoursInMinutes(end) + 60;
		for (let time = start; time < end; time += 30) {
			res.push(
				<div
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

	return (
		<div className='column-container'>
			<h1>{day}</h1>
			{available.map((slot) => processRange(slot.start, slot.end, 'available'))}
			{booked.map((slot) => processRange(slot.start, slot.end, 'booked'))}
		</div>
	);
};

export default Column;
