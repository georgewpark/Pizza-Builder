import React from 'react';
import PropTypes from 'prop-types';
import PizzaTopping from './PizzaTopping.js';

function Pizza({ toppingOptions, selectedToppings }) {
    return (
        <div className='pizza-container'>
            <div className='pizza'>
                { selectedToppings.map(topping =>
                    <PizzaTopping key={ topping } topping={ topping } toppingAmount={ toppingOptions[topping].amount } />) }
            </div>
        </div>
    );
}

Pizza.propTypes = {
    selectedToppings: PropTypes.array,
    totalPrice: PropTypes.number
}

export default Pizza;
