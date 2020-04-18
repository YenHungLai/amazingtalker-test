import React from 'react';
import useScheduleData from './hooks/useScheduleData';
import { getPastSunday } from './helpers';
// Components
import Header from './components/Header/Header';
import Schedule from './components/Schedule/Schedule';
import { useState } from 'react';

const App = () => {
	const [curSunday, setCurSunday] = useState({ ...getPastSunday() });
	const schedule = useScheduleData(curSunday);
	console.log(curSunday);

	return (
		<div>
			<Header setCurSunday={setCurSunday} />
			{schedule && <Schedule schedule={schedule} />}
		</div>
	);
};

export default App;
