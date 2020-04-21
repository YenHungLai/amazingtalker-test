import React from 'react';
import PropTypes, {object} from 'prop-types';
import {useTranslation} from 'react-i18next';
import './Column.css';
import {
  getHoursInMinutes,
  getDiffInMinutes,
  formatMinutes,
} from '../../helpers';
import {WEEK_NAMES, TODAY} from '../../constants';

const Column = ({dateObj, available, booked}) => {
  const {t} = useTranslation();
  const sortByDate = (a, b) => new Date(a.start) - new Date(b.start);
  const processTimeRange = ({start, end, status}) => {
    const res = [];
    const startInMinutes = getHoursInMinutes(start);
    const endInMinutes = startInMinutes + getDiffInMinutes(start, end);
    for (let time = startInMinutes; time < endInMinutes; time += 30) {
      res.push(
          <div
            key={time}
            className={`time-slot ${
						status === 'available' ? 'available' : 'booked'
            }`}
          >
            {formatMinutes(time)}
          </div>,
      );
    }
    return res;
  };

  const lessons = [...available, ...booked];
  const dayInWeek = dateObj.getDay();
  const date = dateObj.getDate();
  const grayOut = dateObj.valueOf() < TODAY ? 'gray-out' : '';

  return (
    <div className={`column-container ${grayOut}`}>
      <div className='title-box'>
        <div>{t(WEEK_NAMES[dayInWeek])}</div>
        <div>{date}</div>
      </div>
      <div
        style={{
          display: dateObj.valueOf() < TODAY ? 'none' : 'block',
        }}
      >
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
