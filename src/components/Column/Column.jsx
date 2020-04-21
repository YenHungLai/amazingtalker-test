import React from 'react';
import PropTypes, { object } from 'prop-types';
import { useTranslation } from 'react-i18next';
import './Column.css';
import { getHoursInMinutes, formatMinutes } from '../../helpers';
import { WEEK_NAMES, TODAY } from '../../constants';

const Column = ({ dateObj, available, booked, isLoading }) => {
	const { t } = useTranslation();
	const sortByDate = (a, b) => new Date(a.start) - new Date(b.start);
	const processTimeRange = ({ start, end, status }) => {
		const res = [];
		// FIXME: Add one hour to match test case.
		start = getHoursInMinutes(start);
		end = getHoursInMinutes(end);
		for (let time = start; time < end; time += 30) {
			res.push(
				<div
					key={time}
					className='time-slot'
					style={{
						color: status === 'available' ? '#02cab9' : '#b6b6b6',
						fontWeight: status === 'available' ? '700' : 'inherit',
						opacity: isLoading ? 0 : 1,
					}}
				>
					{formatMinutes(time)}
				</div>
			);
		}
		return res;
	};

	const lessons = [...available, ...booked];
	const dayInWeek = dateObj.getDay();
	const date = dateObj.getDate();
	const grayOut = dateObj.valueOf() < TODAY ? 'gray-out' : '';
	const colGrayOut = dateObj.valueOf() < TODAY ? 'col-gray-out' : '';

	return (
		<div className={`column-container ${grayOut}`}>
			<div className='title-box'>
				<div>{t(WEEK_NAMES[dayInWeek])}</div>
				<div>{date}</div>
			</div>
			<div className={`${colGrayOut}`}>
				{lessons.sort(sortByDate).map(processTimeRange)}
			</div>
		</div>
	);
};

Column.prototype = {
	dateObj: PropTypes.instanceOf(Date),
	available: PropTypes.arrayOf(object),
	booked: PropTypes.arrayOf(object),
};

export default Column;
