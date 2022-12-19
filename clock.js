 // CONSTRUCTOR
 function TimeAndDate(clockElementId, calendarElementId) {
  this.clockElement = document.getElementById(clockElementId);
  this.calendarElement = document.getElementById(calendarElementId);
}
// METHOD THAT UPDATES DATETIME USING FORMAT METHODS
TimeAndDate.prototype.update = function(clockElement, calendarElement) {
  let dateTime = new Date();
  clockElement.innerHTML = this.formatTime(dateTime.getHours(), dateTime.getMinutes(), dateTime.getSeconds());
  calendarElement.innerHTML = this.formatDate(dateTime.getDate(), dateTime.getMonth(), dateTime.getFullYear());
};

// METHODS THAT FORMATS DATETIME IN CONSTRUCTOR'S PROTOTYPE
TimeAndDate.prototype.formatTime = function(hours, minutes, seconds) {
  return `${this.formatNumber(hours)}:${this.formatNumber(minutes)}:${this.formatNumber(seconds)}`;
};

TimeAndDate.prototype.formatDate = function(day, month, year) {
let monthNames = 
['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let monthName = monthNames[month];

return `${this.formatNumber(day)} ${monthName} ${year}`;
};
// METHOD THAT USES STRING LITERAL TO FORMAT ANY SINGLE DIGIT TO START WITH 0
TimeAndDate.prototype.formatNumber = function(number) {
  if (number < 10){
      return `0${number}`;
  } else{
      return `${number}`;
  }
};
// CREATE NEW INSTANCE + BIND W/ UPDATE METHOD FROM PROTOTYPE
let TimeAndDateObj = new TimeAndDate('clock', 'calendar');
setInterval(TimeAndDateObj.update.bind(TimeAndDateObj, TimeAndDateObj.clockElement, TimeAndDateObj.calendarElement), 1000);

