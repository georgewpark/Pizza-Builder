import React from 'react';
import PropTypes from 'prop-types';
import ToppingIcon from './ToppingIcon.js';

function ToppingOption({ topping, toppingIcons }) {
    return (
        <label className='topping-label'>
            <div className='topping-image'>
                <div className={ `${topping} topping-image-item` }></div>
            </div>
            <span>{ topping }{ toppingIcons.map(icon => <ToppingIcon key={ icon } iconType={ icon } />) }</span>
            <input type='checkbox' id={ topping } className='topping-input' />
        </label>
    );
}

ToppingOption.propTypes = {
    topping: PropTypes.string,
    toppingIcons: PropTypes.array
}

export default ToppingOption;
