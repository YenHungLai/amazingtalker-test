import React from 'react';
import { getNewDate, getTimezoneInfo, getDateInfo } from '../../helpers';
import './Header.css';
// Components
import Controls from '../Controls/Controls';

const Header = ({ curSunday, setCurSunday }) => {
	const { year, month, date } = getDateInfo(curSunday);
	const nextSunday = getNewDate(curSunday, 7);
	const { gmtOffset, timezoneName } = getTimezoneInfo();

	return (
		<div className='header-container'>
			<h3 className='title'>available times</h3>
			<Controls curSunday={curSunday} setCurSunday={setCurSunday} />
			<div className='current-week'>
				{`${year}/${month}/${date} - ${nextSunday.getDate()}`}
			</div>
			<div className='timezone-info'>
				{`* All the timings listed are in your timezone: ${timezoneName} (${gmtOffset})`}
			</div>
		</div>
	);
};

export default Header;
