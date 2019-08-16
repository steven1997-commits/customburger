import React , { Component } from 'react';

import Button from '../../components/UI/Button/Button';
import styles from './contactData.module.css';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/spinner/spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postal: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        const ing = this.props.ings;

        //alert('you continue!');
        //.json is for firebase only
        //price should actually be calculated on the server
        //this.setState({loading: true});
        const order = {
            ingredients: ing,
            price: this.props.price,
            customer: {
                name: this.state.name,
                address: this.state.address,
                email: this.state.email
            }
        }

        this.props.onOrderBurger(order);

    }

    render(){
        let form = (
            <form>
                <label>Name</label>
                <input className={styles.Input} type='text' name='name' onChange={e => {
                    this.setState({name: e.target.value})
                }}
                value={this.state.name}/>
                <label for>E-mail</label>
                <input className={styles.Input} type='email' name='email' onChange={e => {
                    this.setState({email: e.target.value})
                }}
                value={this.state.email}/>
                <Button type='Success' clicked={this.orderHandler}>Order Here</Button>
            </form>
        );
        if(this.props.loading){
            form = <Spinner/>
        }
        return (
            <div className={styles.ContactData}>
                <h4>Enter your data</h4>
                {form}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ings: state.burgerBuilderReducer.ingredients,
        price: state.burgerBuilderReducer.totalPrice,
        loading: state.order.loading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onOrderBurger: (data) => dispatch(actions.purchaseBurger(data))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(ContactData,axios));