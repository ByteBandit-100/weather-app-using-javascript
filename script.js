const inputLocation = document.querySelector("input");
const searchBtn = document.querySelector("button");
const weatherImg = document.querySelector("#weather-status-img");
const temperature = document.querySelector(".temperature-degree");
const temperatureStatus = document.querySelector(".temperature-status");

const humidityValue = document.querySelector("#humidity-value");
const windyValue = document.querySelector("#windy-value");

const apiKey = "5136a426d77586d3163a7ba1ff25b56b";

async function getWeather(city, key) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    let response = null;
    let data = null;
    try {
        unSetValue();
        weatherImg.src ="./weather/search-interface-symbol.png";
        temperatureStatus.innerText = "loading.....";
        response = await fetch(url);
        data = await response.json();
    } catch (err) {
        temperatureStatus.innerText = "no internet connection";
        weatherImg.src = "./weather/no-wifi (1).png";
        unSetValue();
        return;
    }
    if (data.cod >= 400) {
        temperatureStatus.innerText = "invalid/empty city name";
        weatherImg.src = "./weather/nothing.png";
        unSetValue();
    }
    const temp = data.main.temp;

    function unSetValue() {
        windyValue.innerText = "";
        temperature.innerHTML = "";
        humidityValue.innerText = "";
        temperature.innerHTML = "";
    }

    temperature.innerHTML = `${Math.round(temp - 275)}<sup>o</sup>C`;
    const weatherDescription = data.weather[0].description;
    switch (weatherDescription) {
        case "overcast clouds":
            weatherImg.src = "./weather/clouds.png";
            break;
        case "scattered clouds":
            weatherImg.src = "./weather/clouds.png";
            break;
        case "few clouds":
            weatherImg.src = "./weather/clouds.png";
            break;
        case "broken clouds":
            weatherImg.src = "./weather/clouds.png";
            break;
        case "moderate rain":
            weatherImg.src = "./weather/rain.png";
            break;
        case "clear sky":
            weatherImg.src = "./weather/sunny.png";
            break;
    }
    temperatureStatus.innerText = weatherDescription;
    humidityValue.innerText = `${data.main.humidity} %`;
    windyValue.innerText = `${data.wind.speed}Km/h`;
}
searchBtn.addEventListener("click", () => {
    getWeather(inputLocation.value, apiKey);
});
