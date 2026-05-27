import { useState } from "react"
import SearchBar from "./components/SearchBar"
import WeatherCard from "./components/WeatherCard"

function App() {
  const [dataWeather, setDataWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function weatherApp(city: string, unit: string) {
    try {
      setLoading(true)
      const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=480f6e50b8dd2d14e0458686a070bf36&units=${unit}`)
      const res = await data.json()
      setDataWeather(res)
      setLoading(false)
    } catch (error) {
    console.log(error)
  }
}

  return (
    <div>
      <h1>Weather App</h1>
      <SearchBar onSearch={weatherApp}/>
      {dataWeather && <WeatherCard data={dataWeather}/>}
    </div>
  )
}

export default App