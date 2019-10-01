'use strict';
function setDailyRhythm(wakeUpTime, bedTime) {

		const goodMorning = () => alert('Доброе утро');
		const goodNight = () => alert('Спокойной ночи');
		
		const checkTimewakeUp = setAlarm(wakeUpTime, goodMorning);
		const checkTimetoSleep = setAlarm(bedTime, goodNight);
		
		setInterval(checkTimewakeUp, 10000);
		setInterval(checkTimetoSleep, 10000);
		}
		
		function setAlarm(time, callback) {
		return function () {
		const timeNow = new Date();
		const hours = timeNow.getHours().toString();
		const minutes = timeNow.getMinutes().toString();
		let resultTime = "";
		
		if (minutes.length < 2) {
		resultTime = hours + ":" + 0 + minutes;
		} else if (minutes.length >= 2) {
		resultTime = hours + ":" + minutes;
		}
		if (resultTime === time) {
		callback();
		}
		}
		}
		
		
		setDailyRhythm('7:30','19:07');		