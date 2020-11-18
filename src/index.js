import css from "./css/style.css";
import debaunce from 'lodash.debounce'
import timerRafs from './timerRafs.js'


function getTimeBetween(time, newDate){
  let timeBetween = time - newDate

  let daysBrfore = Math.floor(timeBetween / 1000 / 60 / 60 /24)
  let hoursBefore = Math.floor(timeBetween % (1000 * 60 * 60 * 24) / (1000 * 60 * 60 ))
  let minutsBefore = Math.floor(timeBetween % (1000 * 60 * 60) / (1000 * 60))
  let secondsBefore = Math.floor(timeBetween % (1000 * 60) / (1000))

  timerRafs.daysContent.textContent = daysBrfore
  timerRafs.hoursContent.textContent = hoursBefore
  timerRafs.minsContent.textContent = minutsBefore
  timerRafs.secondsContent.textContent = secondsBefore


}


let replace = setInterval(() => {

  let timeTo = document.getElementById('date').value

  let newDate = new Date()

  let time = new Date(timeTo).getTime()

  if(timeTo != ''){getTimeBetween(time, newDate)}

}, 1000)


// let interval = setInterval(getTimeBetween(time, newDate), 1000)