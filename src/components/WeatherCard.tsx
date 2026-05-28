type Props = {
  data: any
}

const WeatherCard = ({ data }: Props)  => {

  

  return(
    <>
    <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
    <p>Όνομα Πόλης: {data.name}ς</p>
    <p>Θερμοκρασία: {Number(data.main.temp).toFixed(1)}°C</p>
    <p>Υγρασία: {data.main.humidity}%</p>
    <p>Περιγραφή: {data.weather[0].description}</p>
    </>
  )
}

export default WeatherCard

