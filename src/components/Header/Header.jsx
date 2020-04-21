import React from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';
import {getNewDate, getTimezoneInfo, getDateInfo} from '../../helpers';
import './Header.css';
// Components
import Controls from '../Controls/Controls';

const Header = ({curSunday, setCurSunday}) => {
  const {year, month, date} = getDateInfo(curSunday);
  const nextSunday = getNewDate(curSunday, 7);
  const {gmtOffset, timezoneName} = getTimezoneInfo();
  const {t, i18n} = useTranslation();

  const selectLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className='header-container'>
      <h3 className='title'>{t('available times')}</h3>
      <Controls curSunday={curSunday} setCurSunday={setCurSunday} />
      <div className='current-week'>
        {`${year}/${month}/${date} - ${nextSunday.getDate()}`}
      </div>
      <div className='timezone-info'>
        {t('timezone', {timezoneName, gmtOffset})}
      </div>
      <span className='select-language'>
        <label htmlFor='language'>language</label>
        <select id='language' onChange={selectLanguage}>
          <option value='zh'>chinese</option>
          <option value='en'>english</option>
        </select>
      </span>
    </div>
  );
};

Header.prototype = {
  curSunday: PropTypes.instanceOf(Date).isRequired,
  setCurSunday: PropTypes.func.isRequired,
};

export default Header;
