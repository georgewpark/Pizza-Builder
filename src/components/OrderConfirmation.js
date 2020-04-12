import React from 'react';
import PropTypes from 'prop-types';

function OrderConfirmation({ closeConfirmationBtnRef, handleOrderSubmit }) {
    return (
        <div className='order-confirmation'>
            <div className='order-modal'>
                <h2>Order Confirmed</h2>
                <p>Your pizza will be with you shortly!</p>
                <button
                    className='btn close-btn'
                    onClick={ handleOrderSubmit }
                    aria-label="Close Confirmation"
                    ref={ closeConfirmationBtnRef }
                >
                    Close
                </button>
            </div>
        </div>
    );
}

OrderConfirmation.propTypes = {
    handleOrderSubmit: PropTypes.func
}

export default OrderConfirmation;
