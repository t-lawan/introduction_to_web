import dayjs from "dayjs";

export default class DateManager {


    setDate(){
        let dateElem = document.getElementById('date');
        dateElem.textContent = dayjs().format('dddd, DD MMM YYYY');
    }


    test(){
        console.log("TEST")
    }

    setTime(){
        let timeElem = document.getElementById('time');
        let timeString = dayjs().format('h:mm a');
        timeElem.textContent = timeString;
    }
}