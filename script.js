const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Islamabad';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b738a4d41emsh323b15ab4512ed3p17c030jsn7f34e3152e2a',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

fetch(url, options)
    .then(response => response.json())
    .then(response => {

        console.log(response)

        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));




// try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
// } catch (error) {
//     console.error(error);
// }