
import { useContext } from 'react'
import PizzaContext from '../context/PizzaContext'
import ToppingIcon from './ToppingIcon'
import ToppingOption from './ToppingOption'

const PizzaOptions = () => {
  const {
    sizeOptions,
    selectedSize,
    setSelectedSize,
    toppingPrice,
    toppingOptions
  } = useContext(PizzaContext)

  return (
    <section className='pizza-options panel' aria-label='pizza options'>
      <h2>Options</h2>
      <h3>Size</h3>
      <div className='pizza-options__size'>
        <select
          className='pizza-options__size-input'
          aria-label='pizza size'
          value={selectedSize}
          onChange={e => setSelectedSize(e.target.value)}
        >
          {
            Object.keys(sizeOptions).map(size =>
              <option key={size} value={size}>{`${size} (${sizeOptions[size].inches}")`}</option>
            )
          }
        </select>
        <svg className='pizza-options__size-icon' viewBox='0 0 20 20' fill='none' aria-hidden='true'>
          <path stroke='#0e447a' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 7l6 6 6-6'></path>
        </svg>
      </div>
      <h3>Toppings</h3>
      <ul className='pizza-options__details'>
        <li><ToppingIcon iconType={'vegetarian'} /> Vegetarian</li>
        <li><ToppingIcon iconType={'gluten free'} /> Gluten Free</li>
        <li><ToppingIcon iconType={'hot'} /> Hot & Spicy</li>
      </ul>
      <p className='pizza-options__details'>Toppings charged at ${(toppingPrice / 100).toFixed(2)} each.</p>
      <ul className='pizza-options__toppings'>
        {
          Object.entries(toppingOptions).map(topping =>
            <ToppingOption key={topping[0]} topping={topping[0]} toppingIcons={topping[1].icons} />
          )
        }
      </ul>
    </section>
  )
}

export default PizzaOptions