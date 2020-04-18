export const getFirstSunday = () => {
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

export const getHourPlusMinutes = (date) => {
	const dateObj = new Date(date);
	return dateObj.getHours() * 60 + dateObj.getMinutes();
};
