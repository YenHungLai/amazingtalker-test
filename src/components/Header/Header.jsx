import React from 'react';
import { useTranslation } from 'react-i18next';
import { getNewDate, getTimezoneInfo, getDateInfo } from '../../helpers';
import './Header.css';
// Components
import Controls from '../Controls/Controls';

const Header = ({ curSunday, setCurSunday }) => {
	const { year, month, date } = getDateInfo(curSunday);
	const nextSunday = getNewDate(curSunday, 7);
	const { gmtOffset, timezoneName } = getTimezoneInfo();
	const { t } = useTranslation();

	return (
		<div className='header-container'>
			<h3 className='title'>{t('available times')}</h3>
			<Controls curSunday={curSunday} setCurSunday={setCurSunday} />
			<div className='current-week'>
				{`${year}/${month}/${date} - ${nextSunday.getDate()}`}
			</div>
			<div className='timezone-info'>
				{t('timezone', { timezoneName, gmtOffset })}
			</div>
		</div>
	);
};

export default Header;
