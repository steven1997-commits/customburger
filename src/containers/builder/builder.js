import React , { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/auxiliary';
import Burger from '../../components/burger/burger';
import Controls from '../../components/burger/controls/controls';
import Modal from '../../components/UI/modal/modal';
import Summary from '../../components/burger/summary/summary';
import Spinner from '../../components/UI/spinner/spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as burgerBuilderActions from '../../store/actions/index';
import axios from '../../axios-orders';

class Builder extends Component {

    //local state manages UI state, keep other info in redux
    state = {
        purchasing: false
    }

    componentDidMount() {
        /*axios.get('https://burger-builder-ea013.firebaseio.com/ingredients.json')
            .then(res => {
                this.setState({ingredients: res.data});
            }).catch(err => {
                this.setState({error: true});
            });*/
        this.props.onInitIngredients();
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        });
    }

    /*addIngredientHandler = (type) => {
        const count = this.state.ingredients[type] + 1;
        const updatedIng = {
            ...this.state.ingredients,
        };
        updatedIng[type] = count;
        const newPrice = this.state.totalPrice + PRICES[type]
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIng
        });
        this.updateCanPurchase(updatedIng);
    }*/

    updateCanPurchase = (ingredients) => {
        const sum = Object.keys(ingredients)
        .map((key) => {
            return ingredients[key];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);
        //this.setState({canPurchase: sum > 0});
        return sum > 0;
    }

    /*removeIngredientHandler = (type) => {
        const count = this.state.ingredients[type] - 1;
        if(count < 0){
            return;
        }
        const updatedIng = {
            ...this.state.ingredients,
        };
        updatedIng[type] = count;
        const newPrice = this.state.totalPrice - PRICES[type]
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIng
        });
        this.updateCanPurchase(updatedIng);
    }*/

    //use this to cancel purchases in general
    closeModalHandler = () => {
        this.setState({purchasing: false});
    }

    continuePurchaseHandler = () => {
        this.props.onInitPurchase();
        this.props.history.push({
            pathname: "/checkout"
        });
    }

    render() {
        const disabled = {
            ...this.props.ings
        }
        for(let key in disabled){
            disabled[key] = disabled[key] <= 0;
        }
        let orderSummary = null;
        let burger = this.props.error ? <p>Ingredients cannot be loaded</p> : <Spinner/>
        if(this.props.ings != null){
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings}/>
                    <Controls ordered={this.purchaseHandler} price={this.props.price} 
                    addIng={this.props.onIngredientAdded} remIng={this.props.onIngredientRemoved}
                    disabled={disabled} canPurchase={this.updateCanPurchase(this.props.ings)}/>
                </Aux>
            );
            orderSummary = <Summary ingredients={this.props.ings} canceled={this.closeModalHandler}
            continued={this.continuePurchaseHandler} price={this.props.price}/>;
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} closeModal={this.closeModalHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ings: state.burgerBuilderReducer.ingredients,
        price: state.burgerBuilderReducer.totalPrice,
        error: state.burgerBuilderReducer.error
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(burgerBuilderActions.fetchIngredients()),
        onInitPurchase: () => dispatch(burgerBuilderActions.purchaseInit())
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Builder,axios));