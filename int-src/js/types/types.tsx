export type DiscountCode = {
  [key: string]: number
}

export type Size = {
  [key: string]: {
    basePrice: number,
    inches: number
  }
}

export type Topping = {
  icons: string[],
  amount: number
}