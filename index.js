const api = {
    endpoint: 'http://api.openweathermap.org/data/2.5/',
    key: '1646c6aafac93fe5e258a8b1ad3f5a10',
}
const input = document.querySelector('#input');

input.addEventListener('keypress',enter);

function enter(e){
    if (e.keyCode === 13){
        getInfo(input.value);
        input.value = '';
    }
}

async function getInfo(city){
    const res = await fetch(`${api.endpoint}weather?q=${city}&units=metric&appID=${api.key}`);
    const result = await res.json();
    displayResult(result);
}

function displayResult(result){
    let city = document.querySelector('#city');
    city.textContent = `${result.name}, ${result.sys.country}`;
    
    getOurDate();

    let temperature = document.querySelector('#temperature');
    temperature.textContent = `${Math.round(result.main.temp)}` + '°' ;

    let fellLike = document.querySelector('#feelLike');
    fellLike.textContent = 'Feels like:' + ' ' + `${Math.round(result.main.feels_like)}` + '°' ;
    
    let condition = document.querySelector('#condition');
    condition.textContent = `${result.weather[0].main}` ;

    let variation = document.querySelector('#variation');
    variation.textContent = 'Min: ' + `${Math.round(result.main.temp_min)}` + '°' + ' ' + 'Max: ' + `${Math.round(result.main.temp_max)}` + '°' ;
}


function getOurDate(){
    const myDate = new Date();
    const days = ['Sunday','Monday','Tuesday','Wednesday ','Thursday','Friday','Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    let day = days[myDate.getDay()];

    let month = months[myDate.getMonth()];

    let year = myDate.getFullYear();

    let numberOfMonth = myDate.getDate();

    const showDate = document.querySelector('#date');
    showDate.textContent = `${day}` + ' ' + `${numberOfMonth}` + ' ' + `${month}` + ' ' + `${year}` ;
}