import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from 'react'
import { DiscountCode, Size, Topping } from '../types/types'

type PizzaContextType = {
  sizeOptions: Size
  selectedSize: string
  setSelectedSize: Dispatch<SetStateAction<string>>
  toppingPrice: number
  toppingOptions: { [key: string]: Topping }
  selectedToppings: string[]
  setSelectedToppings: Dispatch<SetStateAction<string[]>>
  discountCodes: DiscountCode
  discountCode: string
  setDiscountCode: Dispatch<SetStateAction<string>>
  discountApplied: boolean
  setDiscountApplied: Dispatch<SetStateAction<boolean>>
  totalPrice: number
  orderConfirmed: boolean
  setOrderConfirmed: Dispatch<SetStateAction<boolean>>
}

type PizzaProviderProps = {
  children: ReactNode
}

const PizzaContext = createContext({} as PizzaContextType)

export const PizzaProvider = ({ children }: PizzaProviderProps) => {
  const [selectedSize, setSelectedSize] = useState('large')
  const [selectedToppings, setSelectedToppings] = useState<string[]>([])
  const [discountCode, setDiscountCode] = useState('')
  const [orderConfirmed, setOrderConfirmed] = useState(false)
  const [discountApplied, setDiscountApplied] = useState(false)

  const sizeOptions: Size = {
    small: {
      basePrice: 800,
      inches: 9.5
    },
    medium: {
      basePrice: 1000,
      inches: 11.5
    },
    large: {
      basePrice: 1200,
      inches: 13.5
    }
  }

  const toppingOptions: { [key: string]: Topping } = {
    pepperoni: {
      icons: ['gluten free'],
      amount: 12
    },
    bacon: {
      icons: ['gluten free'],
      amount: 13
    },
    ham: {
      icons: ['gluten free'],
      amount: 14
    },
    sausage: {
      icons: [],
      amount: 13
    },
    chicken: {
      icons: ['gluten free'],
      amount: 14
    },
    onions: {
      icons: ['vegetarian', 'gluten free'],
      amount: 15
    },
    peppers: {
      icons: ['vegetarian', 'gluten free'],
      amount: 15
    },
    mushrooms: {
      icons: ['vegetarian', 'gluten free'],
      amount: 22
    },
    pineapple: {
      icons: ['vegetarian', 'gluten free'],
      amount: 16
    },
    olives: {
      icons: ['vegetarian', 'gluten free'],
      amount: 19
    },
    jalapenos: {
      icons: ['vegetarian', 'gluten free', 'hot'],
      amount: 19
    }
  }

  const discountCodes: DiscountCode = {
    codepen: 25,
    css: 20,
    george: 30,
    html: 10,
    javascript: 15,
    pizza: 40,
    react: 35,
    typescript: 5
  }

  const toppingPrice = 150

  const totalPrice = parseFloat(
    (
      (sizeOptions[selectedSize].basePrice +
        toppingPrice * selectedToppings.length) /
      100
    ).toFixed(2)
  )

  return (
    <PizzaContext.Provider
      value={{
        sizeOptions,
        selectedSize,
        setSelectedSize,
        toppingPrice,
        toppingOptions,
        selectedToppings,
        setSelectedToppings,
        discountCodes,
        discountCode,
        setDiscountCode,
        discountApplied,
        setDiscountApplied,
        totalPrice,
        orderConfirmed,
        setOrderConfirmed
      }}
    >
      {children}
    </PizzaContext.Provider>
  )
}

export default PizzaContext
