import React from 'react';
import useScheduleData from './hooks/useScheduleData';
import { getFirstSunday } from './helpers';
// Components
import Header from './components/Header/Header';
import Schedule from './components/Schedule/Schedule';
import { useState } from 'react';

const App = () => {
	const [curSunday, setCurSunday] = useState({ ...getFirstSunday() });
	const scheduleData = useScheduleData(curSunday);
	console.log(curSunday);
	console.log(scheduleData);

	return (
		<div>
			<Header setCurSunday={setCurSunday} />
			<Schedule scheduleData={scheduleData} />
		</div>
	);
};

export default App;
