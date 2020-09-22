import {daysToDepature} from './daystodeparture'

function updateUI(e) { 
    let forecast = String(daysToDepature());
    let weather_card = document.getElementById('weather_card');
    let eta = document.getElementById('ETA');
    let header_title = document.getElementById('header_title')
    let weather_component = document.getElementById('weather');
    let weather_icon_component = document.getElementById('weather_icon');
    let arrivalDate = document.getElementById('inputDate').value;


    if (forecast < 1 || forecast >16 ){
        header_title.innerHTML = "";
        weather_card.innerHTML = "No weather data for the selected date";
        eta.innerHTML = "";
    } else {
        let weather = e.data[forecast].weather.description;
        let weather_icon = e.data[forecast].weather.icon;
        let temp = e.data[forecast].temp;

        // console.log('this is the new e', e);

        let country = e.city_name;
        header_title.innerHTML = `Weather on ${arrivalDate} in ${country} is:`;

        weather_component.innerHTML = weather;

        weather_icon_component.innerHTML = `<img src="https://www.weatherbit.io/static/img/icons/${weather_icon}.png" height='50px', width='50px'>` ;

        let temp_component = document.getElementById('temp');
        temp_component.innerHTML = `${temp}℃`;

        // console.log('loolz',daysToDepature)
        let eta_value = daysToDepature();
        eta.innerHTML = `Your trip is in ${eta_value} day/s`;

        weather_card.classList.remove("d-none");

    // let card_loader = document.getElementById('card_loader');
    // card_loader.classList.add("d-none")

    // console.log("weather", weather);
    // console.log("weather_icon", weather_icon);
    // console.log("temp", temp);
     }
}

export {updateUI}
