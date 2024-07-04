import { DiscountCode, Size, Topping } from '../types/types'

export const sizeOptions: Size = {
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

export const toppingOptions: { [key: string]: Topping } = {
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

export const discountCodes: DiscountCode = {
  codepen: 25,
  css: 20,
  george: 30,
  html: 10,
  javascript: 15,
  pizza: 40,
  react: 35,
  typescript: 5
}

export const toppingPrice = 150
