import React from 'react';
import useScheduleData from './hooks/useScheduleData';
import { getPastSunday, getLastSunday } from './helpers';
// Components
import Header from './components/Header/Header';
import Schedule from './components/Schedule/Schedule';
import { useState } from 'react';

const App = () => {
	// TODO: use Date object instead, easier to do calculations.
	const [curSunday, setCurSunday] = useState({ ...getPastSunday() });
	const schedule = useScheduleData(curSunday);
	console.log(curSunday);
	console.log(getLastSunday());

	return (
		<div>
			<Header setCurSunday={setCurSunday} />
			{schedule && <Schedule schedule={schedule} curSunday={curSunday} />}
		</div>
	);
};

export default App;
