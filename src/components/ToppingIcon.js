import React from 'react';
import PropTypes from 'prop-types';

function ToppingIcon({ iconType }) {
    return (
        <span className={ `topping-icon ${iconType.split(' ')[0]}` } aria-label={ iconType }>
            { iconType.charAt(0).toUpperCase() }
        </span>
    );
}

ToppingIcon.propTypes = {
    iconType: PropTypes.string
}

export default ToppingIcon;
