type PizzaToppingProps = {
  topping: string
  toppingAmount: number
}

const PizzaTopping = ({ topping, toppingAmount }: PizzaToppingProps) => {
  let toppings = []

  for (let i = 1; i <= toppingAmount; i++) {
    toppings.push(
      <div
        key={`${topping + i}`}
        className={`topping ${topping} ${topping}-${i} `}
      ></div>
    )
  }

  return <>{[...toppings]}</>
}

export default PizzaTopping
