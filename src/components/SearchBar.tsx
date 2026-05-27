import { useState } from 'react'

type Props = {
    onSearch: (city: string, unit: string) => void
  }

const SearchBar = ({ onSearch }: Props) => {
  const [city, setCity] = useState('')
  const [unit, setUnit] = useState('metric')


  return (
    <div className="search-bar">
      <input 
      type="text" 
      value={city}
      onChange={(e) => setCity(e.target.value)}
      placeholder="Enter city name"
      />
      <select 
      value={unit}
      onChange={(e) => setUnit(e.target.value)}
      >
        <option value="metric">Celsius</option>
        <option value="imperial">Fahrenheit</option>
      </select>
      <button 
      type="submit"
      onClick={() => onSearch(city, unit)}
      >Search</button>
    </div>
  )
}

export default SearchBar