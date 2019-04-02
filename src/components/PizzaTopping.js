import React from 'react';
import PropTypes from 'prop-types';

function PizzaTopping({ topping, toppingAmount }) {

    let toppings = [];

    for (let i = 1; i <= toppingAmount; i++) {
        toppings.push(<div key={ `${topping + i}` } className={ `topping ${topping} ${topping}-${i} ` } ></div>);
    }

    return toppings;
}

PizzaTopping.propTypes = {
    topping: PropTypes.string,
    toppingAmount: PropTypes.number
}

export default PizzaTopping;
