import React from 'react';
import PropTypes from 'prop-types';

function OrderDetails({ selectedToppings, totalPrice, discount, handleDiscountInput, handleDiscountClick, handleOrderSubmit }) {

    const validDiscount = Object.keys(discount.codes).includes(discount.userCode);

    return (
        <div className='order'>
            <h2>Order Details</h2>
            <div className='order-toppings'>
                <h3>Toppings:</h3>
                <ul className='order-toppings-list'>
                    <li>Cheese</li>
                    { selectedToppings.map(topping => <li key={ topping }>{ topping }</li>) }
                </ul>
            </div>
            <div className='order-discount'>
                <h3>Discount Code:</h3>
                <input
                    type='text'
                    className='discount-input'
                    spellCheck='false'
                    value={ discount.userCode }
                    maxLength='10'
                    onChange={ handleDiscountInput }
                    aria-label='Discount Code'
                    aria-describedby='discount-message'
                    aria-invalid={ discount.applied && !validDiscount }
                />
                { discount.applied ?
                    (validDiscount ?
                        <p id='discount-message' className='discount-message valid' role='alert'>Valid Code: { discount.codes[discount.userCode] }% Off</p> :
                        <p className='discount-message invalid' role='alert'>Invalid Code</p>)
                    : null }
                <button className='btn discount-btn' onClick={ handleDiscountClick } aria-label='Apply Discount'>Apply</button>
            </div>
            <div className='order-price'>
                <h3>Total Price:</h3>
                <p className='price'>
                    { `$${discount.applied && validDiscount ?
                        (totalPrice - (totalPrice * (discount.codes[discount.userCode] / 100))).toFixed(2) :
                        totalPrice}` }</p>
                <button className='btn order-btn' onClick={ handleOrderSubmit } aria-label='Confirm Order'>Order</button>
            </div>
        </div>
    );
}

OrderDetails.propTypes = {
    toppingOptions: PropTypes.objectOf(PropTypes.object),
    totalPrice: PropTypes.string,
    discount: PropTypes.object,
    handleDiscountInput: PropTypes.func,
    handleDiscountClick: PropTypes.func,
    handleOrderSubmit: PropTypes.func
}

export default OrderDetails;
