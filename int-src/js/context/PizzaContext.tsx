import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from 'react'

type PizzaContextType = {
  selectedSize: string
  setSelectedSize: Dispatch<SetStateAction<string>>
  selectedToppings: string[]
  setSelectedToppings: Dispatch<SetStateAction<string[]>>
  discountCode: string
  setDiscountCode: Dispatch<SetStateAction<string>>
  discountApplied: boolean
  setDiscountApplied: Dispatch<SetStateAction<boolean>>
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

  return (
    <PizzaContext.Provider
      value={{
        selectedSize,
        setSelectedSize,
        selectedToppings,
        setSelectedToppings,
        discountCode,
        setDiscountCode,
        discountApplied,
        setDiscountApplied,
        orderConfirmed,
        setOrderConfirmed
      }}
    >
      {children}
    </PizzaContext.Provider>
  )
}

export default PizzaContext
