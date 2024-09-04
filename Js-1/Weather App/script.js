// Weather App

const placeInput = document.querySelector('.placeInput');
const weatherForm = document.getElementById('weatherForm');
const apiKey = '7684ab99812cbb872ed963c8e43720b0';
const errorDisplay = document.getElementById("error");

weatherForm.addEventListener("submit", async event => {
    event.preventDefault();
    const city = placeInput.value; // Corrected to use .value instead of .ariaValueMax
    errorDisplay.textContent = "";

    if (!city) {
        displayError("Please input the City");
    } else {
        try {
            const weatherData = await getWeatherData(city);
            displayWeather(weatherData);
            console.log(`city is ${city}`);
        } catch (error) {
            displayError("Could not fetch weather data"); // Updated to provide a user-friendly error message
        }
    }
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error("Could not fetch weather data");
    }

    return await response.json();
}

function displayWeather(data) {
    const { name: city, 
            main: { temp, humidity }, 
            weather: [{ description, id }] } = data;

    const cityDisplay = document.querySelector(".placeDisplay");
    const tempDisplay = document.querySelector(".temperatureDisplay");
    const humidityDisplay = document.querySelector(".Humidity");
    const descDisplay = document.querySelector(".name");
    const weatherEmoji = document.querySelector(".weatherEmoji");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);
}

function getWeatherEmoji(weatherId) {
    switch (true) {
        case (weatherId >= 200 && weatherId < 300):
            return "⛈"; // Thunderstorm
        case (weatherId >= 300 && weatherId < 400):
            return "🌦"; // Drizzle
        case (weatherId >= 500 && weatherId < 600):
            return "🌧"; // Rain
        case (weatherId >= 600 && weatherId < 700):
            return "❄"; // Snow
        case (weatherId >= 700 && weatherId < 800):
            return "🌫"; // Atmosphere
        case (weatherId === 800):
            return "🌞"; // Clear
        case (weatherId >= 801 && weatherId < 810):
            return "☁"; // Clouds
        default:
            return "❓"; // Unknown weather
    }
}

function displayError(message) {
    errorDisplay.textContent = message;
}
