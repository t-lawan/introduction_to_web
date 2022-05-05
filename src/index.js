import './styles.css'
import DateManager from './js/date-manager'
import DataManager from './js/data-manager';

let dateManager = new DateManager()
dateManager.test();


setInterval(() => {
    dateManager.setDate();
    dateManager.setTime();
}, 1000)

let dataManager = new DataManager();
dataManager.getWeatherData();