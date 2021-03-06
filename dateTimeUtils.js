/* Date related utility functions */

//get Weekdays as an array
function getWeekDays() {
	return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
}

//Get week number
Date.prototype.getWeek = function() {
    var dayOne = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - dayOne) / 86400000) + dayOne.getDay() + 1) / 7);
    //return $.datepicker.iso8601Week(this); //alternative way by using datepicker
}

//Get next working day (not including Saturday and Sunday)
function getNextWorkingDay(date) {
	var currentDate = date;
	var canRepeat = true;
	while (canRepeat) {
		var nextDay = new Date(currentDate.setDate(currentDate.getDate() + 1));
		if (nextDay.getDay() == 6 || nextDay.getDay() == 0) {
			currentDate.setDate(currentDate.getDate() + 1);
			canRepeat = true;
		} else {
			return nextDay;
		}
	}	
}

//Get business days count (do not add Saturday and Suday)
function getBusinessDatesCount(startDate, endDate) {
    var count = 0;
    var currentDate = startDate
    while (currentDate.getTime() <= endDate.getTime()) {
        var dayOfWeek = currentDate.getDay();
        if(!((dayOfWeek == 6) || (dayOfWeek == 0))) {
           count++;
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return count;
}

// Convert UTC timestamp to preferred date format.
function UTCToDate(utcTime, dateFormat) {
	var date = new Date(utcTime);
	var year = date.getFullYear();
    	var month = ('0' + (date.getMonth() + 1)).slice(-2);
    	var day = date.getDate();
	var formattedDate;
	switch(dateFormat) {
	    case 'MM-DD-YYYY':
	        formattedDate = month + '-' + day + '-' + year;
	        break;
	    case 'DD-MM-YYYY':
	        formattedDate = day + '-' + month + '-' + year;
	        break;
	    case 'YYYY-MM-DD':
	        formattedDate = year + '-' + month + '-' + day;
	        break;
	    case 'MM/DD/YYYY':
	        formattedDate = month + '/' + day + '/' + year;
	        break;
	    case 'DD/MM/YYYY':
	        formattedDate = day + '/' + month + '/' + year;
	        break;
	    case 'YYYY/MM/DD':
	        formattedDate = year + '/' + month + '/' + day;
	        break;
	    default:
	        formattedDate = year + '-' + month + '-' + day;
	}
	return formattedDate;
}
