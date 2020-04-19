import { useState } from 'react';
import { useEffect } from 'react';

const useScheduleData = ({ year, month, date }) => {
	const [response, setResponse] = useState();

	useEffect(() => {
		fetch(
			`https://cors-anywhere.herokuapp.com/https://api.amazingtalker.com/v1/guest/teachers/amy-estrada/schedule?started_at=${year}-${month}-${date}T06%253A00%253A00.000Z`
		)
			.then((res) => res.json())
			.then((data) => {
				setResponse(data);
			})
			.catch((err) => console.log(err));
	}, [date]);

	return response;
};

export default useScheduleData;
