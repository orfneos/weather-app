type Props = {
  data: any
}

const Forecast = ({ data }: Props) => {


  return(
    <>
    {data.list.filter((_: any, index: number) => index % 8 === 0).map((item: any) => (
      <div key={item.dt}>
        <p>{new Date(item.dt * 1000).toLocaleDateString('el-GR', {weekday: 'long'})}</p>
        <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
        <p>{Number(item.main.temp).toFixed(1)}°C</p>
      </div>
    ))}
    </>
  )
}

export default Forecast