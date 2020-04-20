import React, { useState } from 'react';
import useScheduleData from './hooks/useScheduleData';
import { getThisSunday } from './helpers';
import './App.css';
// Components
import Header from './components/Header/Header';
import Schedule from './components/Schedule/Schedule';

const App = () => {
	const [curSunday, setCurSunday] = useState(getThisSunday());
	const schedule = useScheduleData(curSunday);

	if (!schedule) {
		return (
			<div className='loading'>
				<i className='fas fa-spinner fa-pulse fa-3x'></i>
			</div>
		);
	}

	return (
		<div className='App'>
			<Header curSunday={curSunday} setCurSunday={setCurSunday} />
			<Schedule schedule={schedule} curSunday={curSunday} />
		</div>
	);
};

export default App;
