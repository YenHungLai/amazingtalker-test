import React from 'react';
import PropTypes from 'prop-types';
import './Controls.css';
import {THIS_SUNDAY} from '../../constants';
import {getNewDate} from '../../helpers';

const Controls = ({curSunday, setCurSunday}) => {
  const handleClick = (e) => {
    if (e.target.id === 'left') setCurSunday(getNewDate(curSunday, -7));
    else setCurSunday(getNewDate(curSunday, 7));
  };

  return (
    <div className='controls-container'>
      <button id='left' onClick={handleClick} disabled={curSunday.toString() === THIS_SUNDAY}>
        <i className='fas fa-chevron-left'></i>
      </button>
      <button id='right' onClick={handleClick}>
        <i className='fas fa-chevron-right'></i>
      </button>
    </div>
  );
};

Controls.prototype = {
  curSunday: PropTypes.instanceOf(Date),
  setCurSunday: PropTypes.func,
};

export default Controls;
