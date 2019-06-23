const appKey = "f24f40b1c24505685fce3b8acd0fcffc";
const results = document.getElementById('results')
function formSub(){
    let city = document.getElementById('city');
    let cityVal = city.value;
    console.log(cityVal);
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityVal + "&appid=" + appKey;
    // httpRequestAsync(url, theResponse);
    httpRequestAsync(url, theResponse);
}
function theResponse(response){
    let box = document.getElementById('box');
    box.style.margin = "6%";
    let jsonObject = JSON.parse(response);
    console.log(jsonObject)
    box1.style.display = "block"
    results.style.display = "block"
    tipbox.style.display = "block"
    let condition = jsonObject.weather[0].description
    let name = jsonObject.name;
    let temp = Math.floor(jsonObject.main.temp - 273);
    let sky = jsonObject.weather[0].main;
    if(sky == "Rain"){
        document.body.style.background = "url('https://www.creativeboom.com/uploads/articles/75/7520c4ca36ddb921779bc4c7460753e866d4e46a_1100.jpg')"
        document.body.style.backgroundSize = "100% 100%";
        document.body.style.overflow = "hidden";
    }else if(sky == "Snow"){
        document.body.style.background = "url('http://s1.1zoom.net/big0/871/404674-svetik.jpg')"
        document.body.style.backgroundSize = "100% 100%";
        document.body.style.overflow = "hidden";
    
    }else if(sky == "Clear"){
        document.body.style.background = "url('https://www.pictorem.com/collection/900_fabartdesigns_tree,%20sun,%20sunshine,%20summer,%20meadow,%20grassland,%20landscape,%20morning,%20grass,%20blue%20sky,%20clear%20sky,%20countryside,%20sunrise,%20yorkshire,.jpg')";
        document.body.style.backgroundSize = "100% 100%";
        document.body.style.overflow = "hidden";
    }else if(sky == "Clouds"){
        document.body.style.background = "url('https://media.mnn.com/assets/images/2018/08/CollectionOfCloudsAgainstABlueSky.jpg.653x0_q80_crop-smart.jpg')";
        document.body.style.backgroundSize = "100% 100%";
        document.body.style.overflow = "hidden";
    }else if(sky == "Drizzle"){
        document.body.style.background = "url('https://www.shemazing.net/wp-content/uploads/2017/10/drizzle-656x437.jpg')";
        document.body.style.backgroundSize = "100% 100%";
        document.body.style.overflow = "hidden";
    }else if(sky == "Thunderstorm"){
        document.body.style.background = "url('https://cdn.pixabay.com/photo/2016/05/03/09/40/thunder-1368797_960_720.jpg')";
        document.body.style.backgroundSize = "100% 100%";
        document.body.style.overflow = "hidden";
    }else if(sky == "Mist"){
        document.body.style.background = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/December_Fog_01.jpg/1280px-December_Fog_01.jpg')";
        document.body.style.backgroundSize = "100% 100%";
        document.body.style.overflow = "hidden";
    }else if(sky == "Fog"){
        document.body.style.background = "url('https://cdn.pixabay.com/photo/2017/08/02/15/50/hilly-2572197_960_720.jpg')";
        document.body.style.backgroundSize = "100% 100%";
        document.body.style.overflow = "hidden";
    }else if(sky == "Tornado"){
        document.body.style.background = "url('https://cdn.pixabay.com/photo/2016/02/11/07/37/tornado-1193184_960_720.jpg')";
        document.body.style.backgroundSize = "100% 100%";
        document.body.style.overflow = "hidden";
    }else if(sky == "Haze"){
        document.body.style.background = "url('https://photos.smugmug.com/Portfolio/topshots/i-zddgk8M/0/L/hazy-london-L.jpg')";
        document.body.style.backgroundSize = "100% 100%";
        document.body.style.overflow = "hidden";
    }else{
        document.body.style.background = "url('https://www.arkessa.com/wp-content/uploads/2016/12/dawn-sun-mountain-landscape-65865.jpg')";
        document.body.style.backgroundSize = "100% 100%";
        document.body.style.overflow = "hidden";
    }
    let tips = document.getElementById('tips');
    if(sky == "Clouds"){
        tips.innerHTML = `<p>It's cloudy outside!<br>Perfect weather for a picnic!</p>`;
    }else if(sky == "Rain"){
        tips.innerHTML = `<p>Keep an umbrella handy.<br>Could be cold outside.<br>Drive Safe!</p>`;
    }else if(sky == "Snow"){
        tips.innerHTML = `<p>It's chilly out! <br> Make sure to have jackets and overcoats handy.</p>`;
    }else if(sky == "Clear"){
        tips.innerHTML = `<p>It's a beautiful day!<br>Could be sunny out! </p>`
    }else if(sky == "Drizzle"){
        tips.innerHTML =`<p>An umbrella should suffice! or if you love the rain, just head out and enjoy !</p>`
    }else if(sky == "Thunderstorm"){
        tips.innerHTML =`<p>Staying indoors is best. Keep electronic appliances unplugged to protect them from a surge. </p>`
    }else if(sky == "Mist"){
        tips.innerHTML =`<p>This should clear out soon, but driving is still not advised! Take Care!</p>`
    }else if(sky == "Fog"){
        tips.innerHTML =`<p>Fog can prove dangerous interms of visibility! <br> Driving is seriously not advised.</p>`
    }else if(sky == "Tornado"){
        tips.innerHTML =`<p>Stay indoors!<br>Go to a windowless interior room on lowest level of your house.</p>`
    }else{
        tips.innerHTML =`<p>Have a nice day!</p>`
    }
    let humidity = jsonObject.main.humidity;
    results.innerHTML = `<h1>${name}</h1>
                         <h3>Temperature: ${temp}°</h3>
                         <h3>Sky Condition: ${condition}<h3>
                         <h3>Humidity: ${humidity}%</h3>`;
    cityVal.innerHTML = jsonObject.name;
    icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png" ;
    temperature.innerHTML = parseInt(jsonObject.main.temp - 273) + "°";
    humidity.innerHTML = jsonObject.main.humidity + "%";
   
}
function httpRequestAsync(url, callback){
    //console.log("Hello");
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
        callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true); //true for asynchronous
    httpRequest.send();
}