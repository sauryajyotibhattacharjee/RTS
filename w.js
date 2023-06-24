function GetInfo() {

    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--";

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=32ba0bfed592484379e51106cef3f204')
.then(response => response.json())
.then(data => {

    //Getting the min and max values for each day
    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1)+ "°";
        //Number(1.3450001).toFixed(2); // 1.35
    }

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
    }
    //------------------------------------------------------------

    //Getting Weather Icons
     for(i = 0; i<5; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[i].weather[0].icon
        +".png";
    }
    //------------------------------------------------------------
    console.log(data)


})

.catch(err => alert("Something Went Wrong: Try Checking Your Internet Coneciton"))
}

function DefaultScreen(){
    document.getElementById("cityInput").defaultValue = "London";
    GetInfo();
}


//Getting and displaying the text for the upcoming five days of the week
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//Function to get the correct integer for the index of the days array
function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }
    
function rotateClockHands() {
    const currentDate = new Date();
    const seconds = currentDate.getSeconds() * 6;
    const minutes = (currentDate.getMinutes() + currentDate.getSeconds() / 60) * 6;
    const hours = (currentDate.getHours() + currentDate.getMinutes() / 60) * 30;
  
    document.getElementById("second-hand").style.transform = `rotate(${seconds}deg)`;
    document.getElementById("minute-hand").style.transform = `rotate(${minutes}deg)`;
    document.getElementById("hour-hand").style.transform = `rotate(${hours}deg)`;
  }
  setInterval(rotateClockHands, 1000);
  // Function to append characters to the input
function append(char) {
    const result = document.getElementById('result');
    result.innerText += char;
  }
  
  // Function to clear the input
  function clearInput() {
    const result = document.getElementById('result');
    result.innerText = '';
  }
  
  // Function to delete the last character from the input
  function deleteChar() {
    const result = document.getElementById('result');
    result.innerText = result.innerText.slice(0, -1);
  }
  
  // Function to calculate the result
  function calculate() {
    const result = document.getElementById('result');
    const expression = result.innerText;
    
    try {
      const answer = eval(expression);
      result.innerText = answer;
    } catch (error) {
      result.innerText = 'Error';
    }
  }
  
  