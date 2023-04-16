import { useContext } from 'react'
import PizzaContext from '../context/PizzaContext'
import PizzaTopping from './PizzaTopping'

const Pizza = () => {
  const { selectedSize, toppingOptions, selectedToppings } = useContext(PizzaContext)

  return (
    <div className='pizza panel'>
      <div className={`pizza__pie pizza__pie--${selectedSize}`}>
        {
          selectedToppings.map(topping =>
            <PizzaTopping key={topping} topping={topping} toppingAmount={toppingOptions[topping].amount} />
          )
        }
      </div>
    </div>
  )
}

export default Pizza