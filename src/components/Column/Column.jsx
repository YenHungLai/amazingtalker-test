import React from 'react';
import './Column.css';
import { getHourPlusMinutes } from '../../helpers';

const Column = ({ weekday, slots }) => {
	const processRange = (start, end, status) => {
		const res = [];
		//FIXME: Add one hour to match test case.
		start = getHourPlusMinutes(start) + 60;
		end = getHourPlusMinutes(end) + 60;
		for (let step = start - 30; step < end; step += 30) {
			res.push(
				<div
					style={{
						color: status === 'available' ? '#02cab9' : 'inherit',
					}}
				>
					{Math.floor(step / 60)}:{((step / 60) % 1) * 60}
				</div>
			);
		}
		return res;
	};

	return (
		<div className='column-container'>
			<h1>{weekday}</h1>
			{slots.map((slot) =>
				processRange(slot.start, slot.end, slot.status)
			)}
		</div>
	);
};

export default Column;
