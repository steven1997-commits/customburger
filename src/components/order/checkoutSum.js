import React from 'react';

import Burger from '../burger/burger';
import Button from '../UI/Button/Button';
import styles from './checkoutSum.module.css';

const CheckoutSummary = (props) => {
    return (
        <div className={styles.CheckoutSummary}>
            <h1>Your checkout summary</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button type="Danger" clicked={props.cancelCheckout}>Cancel</Button>
            <Button type="Success" clicked={props.checkoutContinued}>Continue</Button>
        </div>
    );
}

export default CheckoutSummary;