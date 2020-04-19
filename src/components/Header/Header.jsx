import React from 'react';
// Components
import Controls from '../Controls/Controls';

const Header = ({ curSunday, setCurSunday }) => {
	const { year, month, date } = curSunday;
	// FIXME: 30 or 31 days in this month.

	return (
		<div className='header-container'>
			<h3 className='title'>available times</h3>
			<Controls curSunday={curSunday} setCurSunday={setCurSunday} />
			<time dateTime=''>{`${year}/${month}/${date} - ${date + 7}`} </time>
			<div className='timezone-info'></div>
		</div>
	);
};

export default Header;
