import { useState } from "react"
import SearchBar from "./components/SearchBar"
import WeatherCard from "./components/WeatherCard"
import Forecast from "./components/Forecast"

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [dataWeather, setDataWeather] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [dataForecast, setDataForecast] = useState<any>(null)

  async function weatherApp(city: string, unit: string) {
    try {
      setError("")
      setLoading(true)
      const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=480f6e50b8dd2d14e0458686a070bf36&units=${unit}`)
      const res = await data.json()
      if (res.cod !== 200) {
        setError("Η πόλη δεν βρέθηκε. Δοκίμασε ξανά!")
        setLoading(false)
        return
      }
      setDataWeather(res)
      const forecastData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=480f6e50b8dd2d14e0458686a070bf36&units=${unit}`)
      const forecastRes = await forecastData.json()
      setDataForecast(forecastRes)
    
      
      setLoading(false)
    } catch (err: unknown) {
      setLoading(false)
      setError((err as Error).message || "Η πόλη δεν βρέθηκε. Δοκίμασε ξανά!")
  }
}

  return (
    <div className="min-h-screen bg-purple-950 text-sky-300 flex flex-col items-center p-8">
      <h1>Weather App</h1>
      <SearchBar onSearch={weatherApp}/>
      {error && <p className="text-red-400">{error}</p>}
      {loading && <p>Φορτώνει...</p>}
      {dataWeather && <WeatherCard data={dataWeather}/>}
      {dataForecast && <Forecast data={dataForecast}/>}
    </div>
  )
}

export default App