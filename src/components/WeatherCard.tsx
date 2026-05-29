type Props = {
  data: any
}

const WeatherCard = ({ data }: Props)  => {

  

  return(
    <div className="bg-sky-300 rounded-2xl p-4 text-center mb-8 w-100">
    <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
    <p className="text-2xl font-bold">Όνομα Πόλης: {data.name}</p>
    <p>Θερμοκρασία: {Number(data.main.temp).toFixed(1)}°C</p>
    <p>Υγρασία: {data.main.humidity}%</p>
    <p>Ταχύτητα ανέμου: {Number(data.wind.speed)} m/s</p>
    <p>Περιγραφή: {data.weather[0].description}</p>
    </div>
  )
}

export default WeatherCard

