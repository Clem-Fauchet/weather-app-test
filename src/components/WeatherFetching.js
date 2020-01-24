import React, { useState } from 'react'
import './style/weather.scss'

const api = {
  key: 'c748e4424974c74ae32808a81e600eb8',
  base: 'http://api.openweathermap.org/data/2.5/',
}

function WeatherFetching() {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const search = (e) => {
    if (e.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((data) => {
          setQuery('')
          setWeather(data)
          console.log(data)
        })
    }
  }

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
    <div
      className={
        typeof weather.main != 'undefined'
          ? weather.main.temp > 15
            ? 'App warm'
            : 'App'
          : 'App'
      }
    >
      <main>
        <div className='search-box'>
          <input
            type='text'
            className='search-bar'
            placeholder='Search...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != 'undefined' ? (
          <div>
            <div className='location-box'>
              <div className='location'>
                {weather.name}, {weather.sys.country}
              </div>
              <div className='date'>{dateBuilder(new Date())}</div>
            </div>
            <div className='weather-box'>
              <div className='temp'>{Math.round(weather.main.temp)}°C</div>
              <div className='weather'>{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ''
        )}
      </main>
    </div>
  )
}

export default WeatherFetching
