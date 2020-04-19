import React from 'react';
import useScheduleData from './hooks/useScheduleData';
import { getThisSunday } from './helpers';
// Components
import Header from './components/Header/Header';
import Schedule from './components/Schedule/Schedule';
import { useState } from 'react';

const App = () => {
	const [curSunday, setCurSunday] = useState({ ...getThisSunday() });
	const schedule = useScheduleData(curSunday);
	console.log(curSunday);

	return (
		<div>
			{schedule && <Header curSunday={curSunday} setCurSunday={setCurSunday} />}
			{schedule && <Schedule schedule={schedule} curSunday={curSunday} />}
		</div>
	);
};

export default App;
