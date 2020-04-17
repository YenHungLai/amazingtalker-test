import { useState } from 'react';
import { useEffect } from 'react';

const useScheduleData = ({ year, month, date }) => {
	const [state, setState] = useState();

	useEffect(() => {
		fetch(
			`https://cors-anywhere.herokuapp.com/https://api.amazingtalker.com/v1/guest/teachers/amy-estrada/schedule?started_at=${year}-${month}-${date}T06%253A00%253A00.000Z`
		)
			.then((res) => res.json())
			.then((data) => {
				setState(data);
			});
	}, [year, month, date]);

	return state;
};

export default useScheduleData;
