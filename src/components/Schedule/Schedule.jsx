import React from 'react';
import './Schedule.css';
// Components
import Column from '../Column/Column';

const Schedule = ({ scheduleData }) => {
	console.log(scheduleData);
	const sortedData = {
		sun: [],
		mon: [],
		tue: [],
		wed: [],
		thu: [],
		fri: [],
		sat: [],
	};

	const sortByWeekday = (key, item) => {
		switch (new Date(item.start).getDay()) {
			case 0:
				sortedData.sun.push({ ...item, status: key });
				break;
			case 1:
				sortedData.mon.push({ ...item, status: key });
				break;
			case 2:
				sortedData.tue.push({ ...item, status: key });
				break;
			case 3:
				sortedData.wed.push({ ...item, status: key });
				break;
			case 4:
				sortedData.thu.push({ ...item, status: key });
				break;
			case 5:
				sortedData.fri.push({ ...item, status: key });
				break;
			case 6:
				sortedData.sat.push({ ...item, status: key });
				break;
		}
	};

	Object.keys(scheduleData).map((key) => scheduleData[key].map(sortByWeekday.bind(null, key)));

	return (
		<div className='schedule-container'>
			{Object.keys(sortedData).map((key) => (
				<Column weekday={key} slots={sortedData[key]} />
			))}
		</div>
	);
};

export default Schedule;
