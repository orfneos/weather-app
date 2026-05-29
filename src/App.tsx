import { useState } from "react"
import SearchBar from "./components/SearchBar"
import WeatherCard from "./components/WeatherCard"
import Forecast from "./components/Forecast"

function App() {
  const [dataWeather, setDataWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [dataForecast, setDataForecast] = useState(null)

  async function weatherApp(city: string, unit: string) {
    try {
      setLoading(true)
      const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=480f6e50b8dd2d14e0458686a070bf36&units=${unit}`)
      const res = await data.json()
      setDataWeather(res)
      const forecastData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=480f6e50b8dd2d14e0458686a070bf36&units=${unit}`)
      const forecastRes = await forecastData.json()
      setDataForecast(forecastRes)
      
      setLoading(false)
    } catch (error) {
    console.log(error)
  }
}

  return (
    <div className="min-h-screen bg-purple-950 text-sky-300 flex flex-col items-center p-8">
      <h1>Weather App</h1>
      <SearchBar onSearch={weatherApp}/>
      {dataWeather && <WeatherCard data={dataWeather}/>}
      {dataForecast && <Forecast data={dataForecast}/>}
    </div>
  )
}

export default App