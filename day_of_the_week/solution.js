function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function dayOfTheWeek(day, N) {
  //write code here
  var days = {"Sunday":0, "Monday":1, "Tuesday":2, "Wednesday":3, "Thursday":4, "Friday":5, "Saturday":6};
//   console.log(days[day]);
  var next = days[day] + N;
  var nextDay = next % 7;
//   console.log(next);
  console.log(getKeyByValue(days, nextDay));
    
}