import React from 'react'
import './style/weather.scss'

const api = {
  key: 'c748e4424974c74ae32808a81e600eb8',
  base: 'api.openweathermap.org/data/2.5/weather?q=Paris',
}

function WeatherFetching() {
  const dateBuilder = (d) => {
    let months = [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'December',
    ]
    let days = [
      'Dimanche',
      'Lundi',
      'Mardi',
      'Mercredi',
      'Jeudi',
      'Vendredi',
      'Samedi',
    ]

    let day = days[d.getDay()]
    let month = months[d.getMonth()]
    let year = d.getFullYear()
    let numero = d.getDate()

    return `${day} ${numero} ${month} ${year}`
  }

  return (
    <div>
      <main>
        <div className='search-box'>
          <input type='text' className='search-bar' placeholder='Search...' />
        </div>
        <div className='location-box'>
          <div className='location'>Paris, France </div>
          <div className='date'>{dateBuilder(new Date())}</div>
        </div>
        <div className='weather-box'>
          <div className='temp'>15°C</div>
          <div className='weather'>Brouillard</div>
        </div>
      </main>
    </div>
  )
}

export default WeatherFetching
