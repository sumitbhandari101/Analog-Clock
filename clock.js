var hourHand = document.querySelector('[data-hour-hand]');
var minuteHand = document.querySelector('[data-minute-hand]');
var secondHand = document.querySelector('[data-second-hand]');
function setDate() {
	let now = new Date();
	let hour = now.getHours();
	let minute = now.getMinutes();
	let seconds = now.getSeconds();
	let hourDegrees = hour / 12 * 360 +90;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
	let minuteDegrees = minute / 60 * 360 +90;
	minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
	secondDegrees = seconds / 60 * 360 +90 ;
	secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}
setInterval(setDate, 1000);
