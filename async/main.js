'use strict';

function setDailyRhythm(wakeUpTime, bedTime) {

	const goodMorning = () => alert('Доброе утро!');
	const goSleep = () => alert('Пора спать!');
	
	const wakeUp = setAlarm(wakeUpTime, goodMorning);
	const goBed = setAlarm(bedTime, goSleep);
	
	setInterval(wakeUp, 60000);
	setInterval(goBed, 60000);
	}
	
	function setAlarm(time, callback) {
	return function () {
	const now = new Date();
	const hoursNow = now.getHours().toString();
	const minutesNow = now.getMinutes().toString();
	
	const [hoursAlarm, minutesAlarm] = time.split(':');
	
	if (hoursAlarm === hoursNow && minutesAlarm === minutesNow) {
	callback();
	}
	}
	}
setDailyRhythm('17:55', '16.47');	