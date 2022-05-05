
import axios from 'axios'

export default class DataManager {
    url;
    constructor() {
        this.url = "https://weatherdbi.herokuapp.com/data/weather/london"
    }
    async getWeatherData(){
        let response = await axios.get("https://weatherdbi.herokuapp.com/data/weather/london");
        console.log("RESPONSE", response)
        this.setWeatherData(response.data.currentConditions)
    }

    setWeatherData(data) {
    let imageElem = document.getElementById('picture');

    imageElem.src = data.iconURL
    
    this.setComment(data.comment);
    this.setHumidity(data.humidity)
    this.setPrecip(data.precip)
    this.setTemp(data.temp);
    this.setWind(data.wind);

    }

    setComment = (comment) => {
        let commentElem = document.getElementById('comment');
        commentElem.textContent = comment;
    }

    setHumidity = (humidity) => {
        let humidtyElem = document.getElementById('humidty');
        humidtyElem.textContent = humidity;
    }

    setPrecip = (precip) => {
        let precipElem = document.getElementById('precip');
        precipElem.textContent = precip;
    }

    setTemp = (temp) => {
        let tempElem = document.getElementById('temp');
        tempElem.textContent = temp.c;
    }

    setWind = (wind) => {
        
        let windElem = document.getElementById('wind');
        windElem.textContent = wind.km;
    }

}