type Props = {
  data: any
}

const Forecast = ({ data }: Props) => {


  return(
    <>
    {data.list.filter((_: any, index: number) => index % 8 === 0).map((item: any) => (
      <div key={item.dt}>
        <p>{new Date(item.dt * 1000).toLocaleDateString('el-GR', {weekday: 'long'})}</p>
        <p>{item.main.temp}°C</p>
      </div>
    ))}
    </>
  )
}

export default Forecast