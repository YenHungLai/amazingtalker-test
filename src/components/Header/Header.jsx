import React from 'react';
// Components
import Controls from '../Controls/Controls';

const Header = ({ setCurSunday }) => {
	return (
		<div className='header-container'>
			<h3 className='title'>available times</h3>
			<Controls setCurSunday={setCurSunday} />
			<time dateTime=''></time>
			<div className='timezone-info'></div>
		</div>
	);
};

export default Header;
