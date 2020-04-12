import React, { Component, Fragment } from 'react';
import Header from './Header.js';
import ToppingSelect from './ToppingSelect.js';
import Pizza from './Pizza.js';
import OrderDetails from './OrderDetails.js';
import OrderConfirmation from './OrderConfirmation.js';

class PizzaBuilder extends Component {

    state = {
        toppingOptions: {
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
                icons: ['gluten free'],
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
        },
        selectedToppings: [],
        basePrice: 1000,
        toppingPrice: 150,
        discount: {
            userCode: '',
            applied: false,
            codes: {
                codepen: 25,
                css: 20,
                george: 30,
                html: 10,
                javascript: 15,
                pizza: 40,
                react: 35
            }
        },
        orderConfirmed: false
    }

    confirmOrderBtnRef = React.createRef();
    closeConfirmationBtnRef = React.createRef();

    handleToppingOptionClick = e => {
        if (e.target.className === 'topping-input') {

            const selectedTopping = e.target.id;

            this.state.selectedToppings.includes(selectedTopping) ?
                this.setState(prevState => ({ selectedToppings: prevState.selectedToppings.filter(topping => topping !== selectedTopping) })) :
                this.setState(prevState => ({ selectedToppings: [...prevState.selectedToppings, selectedTopping] }));
        }
    }

    handleDiscountInput = e => {

        const value = e.target.value.trim().toLowerCase();

        this.setState(prevState => ({ discount: { ...prevState.discount, userCode: value } }));
        if (this.state.discount.applied) {
            this.setState(prevState => ({ discount: { ...prevState.discount, applied: false } }));
        }
    }

    handleDiscountClick = () => this.setState(prevState => ({ discount: { ...prevState.discount, applied: true } }));

    handleOrderSubmit = () => {
        this.setState(prevState => (
            { orderConfirmed: !prevState.orderConfirmed }
        ), () => {
            this.state.orderConfirmed ?
                this.closeConfirmationBtnRef.current.focus() :
                this.confirmOrderBtnRef.current.focus();
        })
    };

    render() {
        return (
            <Fragment>
                <Header />
                <main>
                    <div className='container'>
                        <ToppingSelect
                            toppingOptions={ Object.entries(this.state.toppingOptions) }
                            toppingPrice={ (this.state.toppingPrice / 100).toFixed(2) }
                            handleToppingOptionClick={ this.handleToppingOptionClick } />
                        <Pizza
                            selectedToppings={ this.state.selectedToppings }
                            toppingOptions={ this.state.toppingOptions } />
                        <OrderDetails
                            selectedToppings={ this.state.selectedToppings }
                            totalPrice={ ((this.state.basePrice + (this.state.toppingPrice * this.state.selectedToppings.length)) / 100).toFixed(2) }
                            discount={ this.state.discount }
                            confirmOrderBtnRef={ this.confirmOrderBtnRef }
                            handleDiscountInput={ this.handleDiscountInput }
                            handleDiscountClick={ this.handleDiscountClick }
                            handleOrderSubmit={ this.handleOrderSubmit }
                        />
                        {
                            this.state.orderConfirmed ?
                                <OrderConfirmation
                                    handleOrderSubmit={ this.handleOrderSubmit }
                                    closeConfirmationBtnRef={ this.closeConfirmationBtnRef }
                                />
                                : null
                        }
                    </div>
                </main>
            </Fragment>
        )
    }
}

export default PizzaBuilder;
