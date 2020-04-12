import React from 'react';
import PropTypes from 'prop-types';
import ToppingIcon from './ToppingIcon.js';

function ToppingOption({ topping, toppingIcons }) {
    return (
        <li className='topping-option'>
            <input type='checkbox' id={ topping } className='topping-input' />
            <label className='topping-label' htmlFor={ topping } aria-label={ `${topping} (${toppingIcons.map(icon => icon)})` }>
                <div className='topping-image'>
                    <div className={ `${topping} topping-image-item` }></div>
                </div>
                <span className='topping-label-content'>
                    <span className='topping-label-text'>
                        { topping }
                    </span>
                    <span className='topping-label-icons'>
                        { toppingIcons.map(icon => <ToppingIcon key={ icon } iconType={ icon } />) }
                    </span>
                </span>
            </label>
        </li>
    );
}

ToppingOption.propTypes = {
    topping: PropTypes.string,
    toppingIcons: PropTypes.array
}

export default ToppingOption;
