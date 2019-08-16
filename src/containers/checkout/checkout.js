import React, { Component } from 'react';

import CheckoutSummary from '../../components/order/checkoutSum';
import { Route , Redirect } from 'react-router-dom';
import ContactData from './contactData';

import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

class Checkout extends Component {

    cancelCheckoutHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        console.log("checkoutContinuedHandler called")
        this.props.history.replace(this.props.match.path + '/contactdata');
    }

    render() {
        let summary = <Redirect to="/"/>
        if(this.props.ings){
            const purchasedRedirect = this.props.purchased ? <Redirect to='/'/>: null;
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary ingredients={this.props.ings}
                        cancelCheckout={this.cancelCheckoutHandler}
                        checkoutContinued={this.checkoutContinuedHandler}/>
                    <Route path={this.props.match.path + '/contactdata'} component={ContactData}/>
                </div>
            );
        }
        return (
            <div>
                {summary}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        ings: state.burgerBuilderReducer.ingredients,
        purchased: state.order.purchased
    }
};

export default connect(mapStateToProps)(Checkout);