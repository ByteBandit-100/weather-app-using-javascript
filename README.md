# Weather App using JavaScript
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/ByteBandit-100/weather-app-using-javascript)

A simple and elegant weather application built with HTML, CSS, and vanilla JavaScript. It fetches real-time weather data from the OpenWeatherMap API to provide current weather conditions for any city in the world.

## Preview
|  **Error State** | **Cloudy Conditions** |
| :---: | :---: |
| ![Screenshot of the weather app's search interface](https://github.com/user-attachments/assets/1fa614ad-c3c6-4d09-9515-5ee08dc89a84) | ![Screenshot of the weather app showing clear sky conditions](https://github.com/user-attachments/assets/d01600e3-e242-4ebd-9cf2-ab6e32f01744) |
| **No internet Connection** | **Clear sky** |
| ![Screenshot of the weather app showing cloudy conditions](https://github.com/user-attachments/assets/6ef07f8d-c1b5-47a8-abdc-36d1ec194c81) | ![Screenshot of the weather app showing an invalid city error](https://github.com/user-attachments/assets/02f88693-7bff-4f30-b792-b54c5a1beddf) |

## Features
- **Search by City:** Enter any city name to get the latest weather information.
- **Dynamic Weather Icons:** The UI displays different icons based on the current weather condition (e.g., sunny, rainy, cloudy).
- **Key Weather Metrics:** Displays essential data including:
    - Temperature in Celsius.
    - Weather description (e.g., "clear sky", "overcast clouds").
    - Humidity percentage.
    - Wind speed in Km/h.
- **Loading & Error Handling:** Provides user feedback during API calls and gracefully handles errors like invalid city names or network issues.

## Tech Stack
- **Frontend:** HTML, CSS, Vanilla JavaScript
- **API:** [OpenWeatherMap API](https://openweathermap.org/api)

## Getting Started

To run this project locally, follow these simple steps.

### Prerequisites
You will need a modern web browser to run this application.

### Installation & Usage
1.  **Clone the repository:**
    ```sh
    git clone https://github.com/ByteBandit-100/weather-app-using-javascript.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd weather-app-using-javascript
    ```
3.  **API Key:**
    Use your own API key.`.
    ```javascript
    const apiKey = "51******************b";
    ```
   you can get your own free API key from [OpenWeatherMap](https://home.openweathermap.org/users/sign_up) and replace it.

4.  **Open in Browser:**
    Simply open the `index.html` file in your web browser to start using the application.
