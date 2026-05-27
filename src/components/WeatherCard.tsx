type Props = {
  data: any
}

const WeatherCard = ({ data }: Props)  => {

  

  return(
    <>
    <p>Όνομα Πόλης: {data.name}ς</p>
    <p>Θερμοκρασία: {data.main.temp}°C</p>
    <p>Υγρασία: {data.main.humidity}%</p>
    <p>Περιγραφή: {data.weather[0].description}</p>
    </>
  )
}

export default WeatherCard

