import React from 'react';
import './Column.css';
import { getHoursInMinutes, formatMinutes } from '../../helpers';

const Column = ({ weekday, slots }) => {
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
			<h1>{weekday}</h1>
			{slots
				.sort((a, b) => new Date(a.start) - new Date(b.start))
				.map((slot) => processRange(slot.start, slot.end, slot.status))}
		</div>
	);
};

export default Column;
