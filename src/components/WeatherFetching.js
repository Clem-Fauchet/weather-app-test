import React from 'react'

const api = {
  key: 'c748e4424974c74ae32808a81e600eb8',
  base: 'api.openweathermap.org/data/2.5/weather?q=Paris',
}

function WeatherFetching() {
  return (
    <div>
      <main>
        <div className='.search-box'>
          <input type='text' className='search-bar' placeholder='Search...' />
        </div>
      </main>
    </div>
  )
}

export default WeatherFetching
