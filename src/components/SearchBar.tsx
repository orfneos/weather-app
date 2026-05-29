import { useState } from 'react'

type Props = {
    onSearch: (city: string, unit: string) => void
  }

const SearchBar = ({ onSearch }: Props) => {
  const [city, setCity] = useState('')
  const [unit, setUnit] = useState('metric')


  return (
    <div className="flex gap-2 mb-8 mt-8">
      <input 
      className='bg-cyan-100 text-sky-600 placeholder-sky-600 px-4 py-2 rounded-lg'
      type="text" 
      value={city}
      onChange={(e) => setCity(e.target.value)}
      placeholder="Enter city name"
      onKeyDown={(e) => e.key === "Enter" && onSearch(city, unit)}
      />
      <select
      className='bg-cyan-100 text-sky-600 px-2 py-2 rounded-lg'
      value={unit}
      onChange={(e) => setUnit(e.target.value)}
      >
        <option value="metric">Celsius</option>
        <option value="imperial">Fahrenheit</option>
      </select>
      <button 
      className='bg-cyan-100 text-sky-600 px-4 py-2 rounded-lg'
      type="submit"
      onClick={() => onSearch(city, unit)}
      >Search</button>
    </div>
  )
}

export default SearchBar