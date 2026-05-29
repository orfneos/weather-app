
type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
}

const Forecast = ({ data }: Props) => {


  return(
    <div className="flex m-8 gap-4">
    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
    {data.list.filter((_: any, index: number) => index % 8 === 0).map((item: any) => (
      <div key={item.dt} className="bg-sky-300 text-purple-950 rounded-xl p-4 text-center">
        <p>{new Date(item.dt * 1000).toLocaleDateString('el-GR', {weekday: 'long'})}</p>
        <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
        <p>{Number(item.main.temp).toFixed(1)}°C</p>
        <p>{Number(item.main.humidity).toFixed(1)}%</p>
        <p>{Number(item.wind.speed)} m/s</p>
        <p>{(item.weather[0].description)}</p>
      </div>
    ))}
    </div>
  )
}

export default Forecast