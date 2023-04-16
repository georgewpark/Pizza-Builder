import { useContext, KeyboardEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import PizzaContext from '../context/PizzaContext'

const OrderDetails = () => {
  const {
    sizeOptions,
    selectedSize,
    selectedToppings,
    discountCodes,
    discountCode,
    setDiscountCode,
    discountApplied,
    setDiscountApplied,
    totalPrice,
    orderConfirmed,
    setOrderConfirmed
  } = useContext(PizzaContext)

  const navigate = useNavigate()

  const discountValid = Object.keys(discountCodes).includes(discountCode)

  const handleDiscountInput = (value: string) => {
    setDiscountCode(value.trim().toLowerCase())

    if (discountApplied) {
      setDiscountApplied(false)
    }
  }

  const handleDiscountEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setDiscountApplied(true)
    }
  }

  const handleOrderConfirm = () => {
    setOrderConfirmed(true)

    navigate('/confirmation')
  }

  return (
    <section className='order-details panel' aria-label='order details'>
      <h2>Order Details</h2>
      <div className='order-details__size'>
        <h3>Size</h3>
        <p className='order-details__size-value'>
          {`${selectedSize} (${sizeOptions[selectedSize].inches}")`}
        </p>
      </div>
      <div className='order-details__toppings'>
        <h3>Toppings</h3>
        <ul className='order-details__toppings-list'>
          <li className='order-details__toppings-item'>Cheese</li>
          {
            selectedToppings.map(topping =>
              <li key={topping} className='order-details__toppings-item'>{topping}</li>
            )
          }
        </ul>
      </div>
      <div className='order-details__discount'>
        {orderConfirmed ? (
          discountValid && (
            <>
              <h3>Discount Code</h3>
              <p className='order-details__discount-details'>
                <span>{discountCode.toUpperCase()}</span> - {discountCodes[discountCode]}% Off
              </p>
            </>
          )
        ) : (
          <>
            <h3>Discount Code</h3>
            <input
              type='text'
              className='order-details__discount-input'
              spellCheck='false'
              value={discountCode}
              maxLength={10}
              aria-label='Discount Code'
              aria-describedby='discount-message'
              aria-invalid={discountApplied && !discountValid}
              onChange={e => handleDiscountInput(e.target.value)}
              onKeyUp={e => handleDiscountEnter(e)}
            />
            {
              discountApplied ?
                discountValid ?
                  <p id='discount-message' className='order-details__discount-message order-details__discount-message--valid' role='alert'>
                    Valid Code: {discountCodes[discountCode]}% Off
                  </p>
                  :
                  <p id='discount-message' className='order-details__discount-message order-details__discount-message--invalid' role='alert'>
                    Invalid Code
                  </p>
                : null
            }
            {
              !discountApplied && (
                <button className='btn order-details__discount-apply' onClick={() => setDiscountApplied(true)} aria-label='Apply Discount'>Apply</button>
              )
            }
          </>
        )
        }
      </div>
      <div className='order-details__price'>
        <h3>Total Price</h3>
        <p className='order-details__price-value'>
          {
            discountApplied && discountValid ?
              (
                <>
                  <ins>${(totalPrice - (totalPrice * (discountCodes[discountCode] / 100))).toFixed(2)}</ins>
                  <del>${totalPrice.toFixed(2)}</del>
                </>
              )
              : `$${totalPrice.toFixed(2)}`
          }
        </p>
        {
          !orderConfirmed && (
            <button
              className='btn order-details__order'
              aria-label='confirm order'
              onClick={handleOrderConfirm}
            >
              Order
            </button>
          )
        }
      </div>
    </section>
  )
}

export default OrderDetails