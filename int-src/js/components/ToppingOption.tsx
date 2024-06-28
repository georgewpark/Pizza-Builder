import { useContext } from 'react'
import PizzaContext from '../context/PizzaContext'
import ToppingIcon from './ToppingIcon'

type ToppingOptionProps = {
  topping: string
  toppingIcons: string[]
}

const ToppingOption = ({ topping, toppingIcons }: ToppingOptionProps) => {
  const { selectedToppings, setSelectedToppings } = useContext(PizzaContext)

  const handleToppingOptionClick = (selectedTopping: string) => {
    if (selectedToppings.includes(selectedTopping)) {
      // Remove topping
      setSelectedToppings(prevSelectedToppings =>
        prevSelectedToppings.filter(topping => topping !== selectedTopping)
      )
    } else {
      // Add topping
      setSelectedToppings(prevSelectedToppings => [
        ...prevSelectedToppings,
        selectedTopping
      ])
    }
  }

  return (
    <li className='pizza-options__topping'>
      <input
        type='checkbox'
        id={topping}
        className='pizza-options__topping-input'
        checked={selectedToppings.includes(topping)}
        onChange={e => handleToppingOptionClick(e.target.id)}
      />
      <label
        className='pizza-options__topping-label'
        htmlFor={topping}
        aria-label={`${topping} (${toppingIcons.map(icon => icon)})`}
      >
        <div className='pizza-options__topping-image'>
          <div className={`${topping} topping-image-item`}></div>
        </div>
        <span className='pizza-options__topping-label-content'>
          <span className='pizza-options__topping-label-text'>{topping}</span>
          <span className='pizza-options__topping-label-icons'>
            {toppingIcons.map(icon => (
              <ToppingIcon key={`${topping} ${icon}`} iconType={icon} />
            ))}
          </span>
        </span>
      </label>
    </li>
  )
}

export default ToppingOption
