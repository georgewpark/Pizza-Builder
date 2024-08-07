import { useContext } from 'react'
import PizzaContext from '../context/PizzaContext'
import { toppingOptions } from '../data/PizzaData'
import PizzaTopping from './PizzaTopping'

const Pizza = () => {
  const { selectedSize, selectedToppings } = useContext(PizzaContext)

  return (
    <div className='pizza panel'>
      <div className={`pizza__pie pizza__pie--${selectedSize}`}>
        {selectedToppings.map(topping => (
          <PizzaTopping
            key={topping}
            topping={topping}
            toppingAmount={toppingOptions[topping].amount}
          />
        ))}
      </div>
    </div>
  )
}

export default Pizza
