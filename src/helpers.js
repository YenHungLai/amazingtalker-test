export const getThisSunday = () => {
	const today = new Date();
	const year = today.getFullYear();
	const month = today.getMonth() + 1;
	const date = today.getDate() - today.getDay();
	return {
		year,
		month,
		date,
	};
};

export const getDateInfo = (dateString) => {
	const dateObj = new Date(dateString);
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

export const formatMinutes = (minutes) => {
	let hour = Math.floor(minutes / 60);
	let minute = (minutes / 60 - hour) * 60;
	if (hour < 10) hour = '0' + hour.toString();
	if (minute < 10) minute = '0' + minute.toString();
	return `${hour}:${minute}`;
};

export const changeDate = ({ year, month, date }, amount) => {
	const dateObj = new Date(`${month}/${date}/${year}`);
	dateObj.setDate(dateObj.getDate() + amount);
	return {
		year: dateObj.getFullYear(),
		month: dateObj.getMonth() + 1,
		date: dateObj.getDate(),
	};
};

export const getTimezoneInfo = () => {
	const dateString = new Date().toString();
	const gmtOffset = dateString.match(/GMT-\d*/)[0];
	const timezoneName = dateString.match(/\(.*\)/)[0].replace(/\(|\)/g, '');
	return {
		gmtOffset,
		timezoneName,
	};
};

export const isObjectPropertyEqual = (obj1, obj2) =>
	JSON.stringify(obj1) === JSON.stringify(obj2);
