const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const counterTimer = document.querySelector(".counterTimer");

const second = 1000,
    minute = 60 * second,
    hour = 60 * minute,
    day = 24 * hour;

const timerFunction = ()=>{
    let now = new Date(),

    dd = String(now.getDate()).padStart(2,"0"),
    mm = String(now.getMonth() + 1).padStart(2,"0"),
    yyyy = now.getFullYear();

    const enteredDaY = prompt("Enter Day").padStart(2,"0");
    const enteredMonth = prompt("Enter Month").padStart(2,"0");

    now = `${mm}/${dd}/${yyyy}`;

    let targetDate = `${enteredMonth}/${enteredDaY}/${yyyy}`;
    if(now > targetDate){
        targetDate = `${enteredMonth}/${enteredDaY}/${yyyy+1}`;
    }

    const intervalId = setInterval(() => {
        const timer = new Date(targetDate).getTime();
        const today = new Date().getTime();

        const diff = timer - today;
        const leftDay = Math.floor(diff/day);
        const leftHour = Math.floor((diff%day)/hour);
        const leftMinute = Math.floor((diff%hour)/minute);
        const leftSecond = Math.floor((diff%minute)/second);

        daysElement.innerText = leftDay;
        hoursElement.innerText = leftHour;
        minutesElement.innerText = leftMinute;
        secondsElement.innerText = leftSecond;

        if(diff < 0){
            daysElement.innerText = "00";
            hoursElement.innerText = "00";
            minutesElement.innerText = "00";
            secondsElement.innerText = "00";

            heading.innerText = "Time's Up";
            clearInterval(intervalId);
        }
    }, 0);
};
timerFunction();
