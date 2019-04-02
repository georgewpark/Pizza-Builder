import React from 'react';
import PropTypes from 'prop-types';
import ToppingIcon from './ToppingIcon.js';
import ToppingOption from './ToppingOption.js';

function ToppingSelect({ toppingOptions, toppingPrice, handleToppingOptionClick }) {
    return (
        <div className='topping-select'>
            <h2>Toppings</h2>
            <ul className='toppings-info'>
                <li><ToppingIcon iconType={ 'vegetarian' } /> Vegetarian</li>
                <li><ToppingIcon iconType={ 'gluten free' } /> Gluten Free</li>
                <li><ToppingIcon iconType={ 'hot' } /> Hot & Spicy</li>
            </ul>
            <p className='toppings-info'>Toppings charged at { `$${toppingPrice}` } each.</p>
            <div className='topping-options' onClick={ handleToppingOptionClick }>
                { toppingOptions.map(topping => <ToppingOption key={ topping[0] } topping={ topping[0] } toppingIcons={ topping[1].icons } />) }
            </div>
        </div >
    );
}

ToppingSelect.propTypes = {
    toppingOptions: PropTypes.arrayOf(PropTypes.array),
    toppingPrice: PropTypes.string,
    handleToppingOptionClick: PropTypes.func
}

export default ToppingSelect;
