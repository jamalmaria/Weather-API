const appKey = "f24f40b1c24505685fce3b8acd0fcffc";
const results = document.getElementById('results')
function formSub(){
    let city = document.getElementById('city');
    let cityVal = city.value;
    console.log(cityVal);
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityVal + "&appid=" + appKey;
    // httpRequestAsync(url, theResponse);
    // httpRequestAsync(url, theResponse);
    $.ajax({
        url:url,
        success: function (results){
            showResults(results)
        }
    })
    function showResults(result) {
        results.style.display = "block";
       
        let condition = result.weather[0].description;
        let name = result.name;
        let temp = Math.floor(result.main.temp - 273);
        let humidity = result.main.humidity;
        results.innerHTML = `<h1>${name}</h1>
                             <h3>Temperature:${temp}°</h3>
                             <h3>Sky Condition: ${condition}<h3>
                             <h3>Humidity: ${humidity}%</h3>`
        temp.style.fontSize = "xx-large" ;
    }
    
}