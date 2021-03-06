export const getThisSunday = () => {
  const today = new Date();
  today.setDate(today.getDate() - today.getDay());
  return today;
};

export const getDateInfo = (dateObj) => {
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const date = dateObj.getDate();
  return {
    year,
    month,
    date,
  };
};

export const getHoursInMinutes = (date) => {
  const dateObj = new Date(date);
  return dateObj.getHours() * 60 + dateObj.getMinutes();
};

export const getDiffInMinutes = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const diff = Math.abs(startDate.valueOf() - endDate.valueOf());
  return Math.floor(diff / 1000 / 60);
};

export const formatMinutes = (minutes) => {
  let hour = Math.floor(minutes / 60);
  let minute = (minutes / 60 - hour) * 60;
  if (hour < 10) hour = '0' + hour.toString();
  if (minute < 10) minute = '0' + minute.toString();
  return `${hour}:${minute}`;
};

export const getNewDate = (dateObj, amount) => {
  const newObj = new Date(dateObj.valueOf());
  newObj.setDate(dateObj.getDate() + amount);
  return newObj;
};

export const getTimezoneInfo = () => {
  const dateString = new Date().toString();
  const gmtOffset = dateString.match(/GMT.\d*/)[0];
  const timezoneName = dateString.match(/\(.*\)/)[0].replace(/\(|\)/g, '');
  return {
    gmtOffset,
    timezoneName,
  };
};
