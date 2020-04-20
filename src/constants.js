import { getThisSunday } from './helpers';

export const WEEK_NAMES = {
	0: 'sun',
	1: 'mon',
	2: 'tue',
	3: 'wed',
	4: 'thu',
	5: 'fri',
	6: 'sat',
};

export const THIS_SUNDAY = getThisSunday().toString();
