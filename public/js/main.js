// // const submitBtn=document.getElementById("submitBtn")
// // const cityName=document.getElementById("cityName")
// // const temp=document.getElementById("temp")
// // const city_name=document.getElementById("city_name")
// // const temp_status=document.getElementById("temp_status")
// // const getInfo=async(event)=>{
// //     event.preventDefault();
// //    let cityVal=cityName.value;
// //     if(cityVal==="")
// //     {
// //         city_name.innerText=`plz write the name before search`;
// //     }
// //     else{
// //         try{
// //             let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=9f993b9cf58d19195b7084fea58dfc88`
// //             const response=await fetch(url);
// //             const data=await response.json()
// //             console.log(data);
// //             const arrData=[data];
// //             temp_status.innerText=arrData[0].main.temp;
// //             temp.innerText=arrData[0].weather[0].main;
// //         }
// //         catch{
// //             city_name.innerText=`plz enter the city name properly`;
// //         }
       
// //     }
// // }
// // submitBtn.addEventListener("click",getInfo);
// const cityName = document.querySelector('#weatherInput');
// const searchBtn = document.querySelector('#searchBtn');
// const form = document.getElementById('weatherForm');
// const myCity = document.getElementById('city');
// const image = document.getElementById('weatherImage');
// const weather = document.getElementById('weatherMain');
// const temp = document.querySelector('.temp');
// const dates = document.querySelector('.todayDates');
// const times = document.getElementById('todayTime');
// let date = new Date();

// // Function work when user input the city name
// form.addEventListener('submit', function (e) {

//     // preventDefault() to stop page reload
//     e.preventDefault();

//     // Updating the city name
//     let city = cityName.value;
//     const myWeatherContainer = document.querySelector('.weatherContainer');
//     const apiID = `931f131dde3f4ae2fcbc3289fc646471`;
//     // API URL
//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiID}`

//     // fetching data from the weather api
//     fetch(url).then((response) => {
//         return response.json();
//     }).then((data) => {

//         const tempValue = Math.round(data['main']['temp']);
//         const weatherMain = data['weather'][0]['main'];
//         weather.innerHTML = weatherMain;

//         // Updating the DOM
//         myCity.innerHTML = city;
//         temp.innerHTML = `${tempValue}`
//         weather.innerHTML = `${weatherMain}`
//         temp.innerHTML = `${tempValue}<span><sup>o</sup>C</span.`;

//         // Updating the Images according to the weather
//         if (weatherMain == 'Clear') {
//             image.src = `./Images/sunny.png`
//             myWeatherContainer.style.backgroundColor = '#ec6e4c'
//         }
//         if (weatherMain == 'Clouds') {
//             image.src = `./Images/clouds.png`
//             myWeatherContainer.style.backgroundColor = '#86d3d3'
//         }
//         if (weatherMain == 'Rain') {
//             image.src = `./Images/Rain.png`
//             myWeatherContainer.style.backgroundColor = '#494bcf'
//         }
//         if (weatherMain == 'Drizzle') {
//             image.src = `./Images/Drizzle.png`
//             myWeatherContainer.style.backgroundColor = '#8ecfcf'
//         }
//         if (weatherMain == 'Haze') {
//             image.src = `./Images/Drizzle.png`
//             myWeatherContainer.style.backgroundColor = '#d8ced2'
//         }

//         // Updating dates
//         const currentMonth = date.getMonth();
//         switch (currentMonth) {
//             case 0:
//                 dates.innerHTML = `${date.getDate()}, Jan`
//                 break;
//             case 1:
//                 dates.innerHTML = `${date.getDate()}, Feb`
//                 break;
//             case 2:
//                 dates.innerHTML = `${date.getDate()}, Mar`
//                 break;
//             case 3:
//                 dates.innerHTML = `${date.getDate()}, Apr`
//                 break;
//             case 4:
//                 dates.innerHTML = `${date.getDate()}, May`
//                 break;
//             case 5:
//                 dates.innerHTML = `${date.getDate()}, Jun`
//                 break;
//             case 6:
//                 dates.innerHTML = `${date.getDate()}, Jul`
//                 break;
//             case 7:
//                 dates.innerHTML = `${date.getDate()}, Aug`
//                 break;
//             case 8:
//                 dates.innerHTML = `${date.getDate()}, Sept.`
//                 break;
//             case 9:
//                 dates.innerHTML = `${date.getDate()}, Oct.`
//                 break;
//             case 10:
//                 dates.innerHTML = `${date.getDate()}, Nov`
//                 break;
//             case 11:
//                 dates.innerHTML = `${date.getDate()}, Dec`
//                 break;
//         }

//         // Updating times       
//         function leftInterval() {
//             const left = document.getElementById('todayTime')
//             let leftDate = new Date();
//             let hours = leftDate.getHours();
//             let minutes = leftDate.getMinutes();
//             let seconds = leftDate.getSeconds();

//             if (hours == 0) {
//                 hours = 12;
//             }

//             if (hours > 12) {
//                 hours = hours - 12;
//             }
//             left.innerHTML = `${hours}h: ${minutes}m: ${seconds}s`
//         }
//         setInterval(leftInterval, 1000);
//     })
// })
const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');


async function checkWeather(city){
    const api_key = "9f993b9cf58d19195b7084fea58dfc88";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());


    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "images/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "images/clear.png";
            break;
        case 'Rain':
            weather_img.src = "images/rain.png";
            break;
        case 'Mist':
            weather_img.src = "images/mist.png";
            break;
        case 'Snow':
            weather_img.src = "images/snow.png";
            break;

    }

    console.log(weather_data);
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});