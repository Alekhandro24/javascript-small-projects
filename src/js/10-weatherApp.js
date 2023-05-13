const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {
  const APIKey = 'b9a9f29c5f8aff7239b6a05c5c9b1692';
  const city = document.querySelector('.search-box input').value;

  if (city === '') return;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data.cod === '404') {
        container.style.height = '400px';
        weatherBox.style.display = 'none';
        weatherDetails.style.display = 'none';
        error404.style.display = 'block';
        error404.classList.add('fadeIn');
        return;
      }

      error404.style.display = 'none';
      error404.classList.remove('fadeIn');

      const image = document.querySelector('.weather-box img');
      const temperature = document.querySelector('.weather-box .temperature');
      const description = document.querySelector('.weather-box .description');
      const humidity = document.querySelector(
        '.weather-details .humidity span'
      );
      const wind = document.querySelector('.weather-details .wind span');

      switch (data.weather[0].main) {
        case 'Clear':
          image.src = '../images/weatherApp/clear.png';
          break;

        case 'Rain':
          image.src = '../images/weatherApp/rain.png';
          break;

        case 'Snow':
          image.src = '../images/weatherApp/snow.png';
          break;

        case 'Clouds':
          image.src = '../images/weatherApp/cloud.png';
          break;

        case 'Haze':
          image.src = '../images/weatherApp/mist.png';
          break;

        case 'Mist':
          image.src = '../images/weatherApp/mist.png';
          break;

        default:
          image.src = '';
      }

      temperature.innerHTML = `${parseInt(data.main.temp)}<span>°C</span>`;
      description.innerHTML = `${data.weather[0].description}`;
      humidity.innerHTML = `${data.main.humidity}%`;
      wind.innerHTML = `${parseInt(data.wind.speed)}Km/h`;

      weatherBox.style.display = '';
      weatherDetails.style.display = '';
      weatherBox.classList.add('fadeIn');
      weatherDetails.classList.add('fadeIn');
      container.style.height = '590px';
    });
});
