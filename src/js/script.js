// const dayJS = require("dayjs");
// import dayjs from "https://unpkg.com/dayjs@1.8.21/dayjs.min.js";
import  DateManager  from "./date-manager";

function setDate(){
    let dateElem = document.getElementById('date');
    let dayElem = document.getElementById('day');
    // let dateString = dayjs().format('dddd, DD MMM YYYY');
    dateElem.textContent = dayjs().format('dddd, DD MMM YYYY');
    let d = new DateManager();
    // d.test();
    // dayElem.textContent = dayjs().format('dddd, DD MMM YYYY')
}

function setTime(){
    let timeElem = document.getElementById('time');
    let timeString = dayjs().format('h:mm a');
    timeElem.textContent = timeString;
}

function setWeatherData(data) {
    console.log(data)
    let commentElem = document.getElementById('comment');
    let humidtyElem = document.getElementById('humidty');
    let precipElem = document.getElementById('precip');
    let tempElem = document.getElementById('temp');
    let windElem = document.getElementById('wind');
    let imageElem = document.getElementById('picture');

    commentElem.textContent = data.comment;
    humidtyElem.textContent = data.humidity;
    precipElem.textContent = data.precip;
    tempElem.textContent = data.temp.c;
    windElem.textContent = data.wind.km;
    imageElem.src = data.iconURL
    
}
function getWeatherData(){
    fetch("https://weatherdbi.herokuapp.com/data/weather/london")
    .then(res=>res.json())
    .then((json)=>{
        setWeatherData(json.currentConditions)
    }) 
}

setInterval(() => {
    setDate();
    setTime();
}, 1000)
  
getWeatherData()