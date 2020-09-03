const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const hour = now.getHours();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotateZ(${secondsDegrees}deg)`;
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotateZ(${minsDegrees}deg)`;
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotateZ(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
