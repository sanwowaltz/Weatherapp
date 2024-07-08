const inputForm = document.querySelector('form')
const details = document.querySelector('.details')
const card = document.querySelector('.card')
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img ')
const forecast = new Forecast()
//////

const updateUi =(data)=> {

const cityDet =data.cityDet;
const weather = data.weather


    details.innerHTML=
    `
    <h5 class="my-3">${cityDet.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
        `

        if(card.classList.contains('d-none')){
            card.classList.remove('d-none')
        } else{}

        const iconSrc = `img/icons/${weather.WeatherIcon}.svg`
        icon.setAttribute('src', iconSrc)


     let timeScr  =  weather.IsDayTime ?  'img/day.svg' : 'img/night.svg'
     time.setAttribute('src', timeScr)

}



inputForm.addEventListener('submit', e=> {
    e.preventDefault();

const city = inputForm.city.value.trim();
inputForm.reset();


forecast.updateStat(city)
.then(data =>  updateUi(data))

//set local storage

localStorage.setItem('city', city);
})

if(localStorage.getItem('city')){
    forecast.updateStat(localStorage.getItem('city'))
    .then(data => {
        updateUi(data)
    })
    .catch(err => console.log(err) )
}