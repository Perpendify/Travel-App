import {updateUI} from './updateUI'
import {daysToDepature} from './daystodeparture'
import {updateImages} from './updateImages'


const form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    const baseURL = `http://localhost:8081`
    e.preventDefault();
    let lat = getLatLon()[0];
    let lon = getLatLon()[1]
    let days = String(daysToDepature() + 1);
    // console.log('days',days)
    // console.log(lat, lon)

    var location = document.getElementById('inputDestination');
    var cleanLocation = location.value.split(' ').join('+').split(',').join('');
    console.log('look here, ben', JSON.stringify(cleanLocation));

    async function getPixabay() {
        const api_url = `http://localhost:8081/pixabay/${cleanLocation}`
        const response = await fetch(api_url);
        const json = await response.json();
        updateImages(json);
        window.pixabay = json;
    }
    getPixabay()

    async function getWeatherbit() {
        const api_url = `http://localhost:8081/weatherbit/${lat},${lon},${days}`
        const response = await fetch(api_url);
        const json = await response.json();
        updateUI(json)
        document.getElementById('loader').classList.add("d-none");
        daysToDepature()
        window.weatherbit = json;
    }
    getWeatherbit()

})

export { form }
