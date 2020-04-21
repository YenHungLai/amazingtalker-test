import {useState, useEffect} from 'react';
import {getDateInfo} from '../helpers';

const useScheduleData = (curSunday) => {
  const [response, setResponse] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const {year, month, date} = getDateInfo(curSunday);

  useEffect(() => {
    setIsLoading(true);
    fetch(
        `https://cors-anywhere.herokuapp.com/https://api.amazingtalker.com/v1/guest/teachers/amy-estrada/schedule?started_at=${year}-${month}-${
          date
        }T07%253A00%253A00.000Z`,
    )
        .then((res) => res.json())
        .then((data) => {
          setResponse(data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
  }, [year, month, date]);

  return [response, isLoading];
};

export default useScheduleData;
