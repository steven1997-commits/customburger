import React , { Component } from 'react';

import Aux from '../../../hoc/auxiliary';
import Button from '../../UI/Button/Button';

const Summary = (props) => {

        const Ingredients = Object.keys(props.ingredients)
            .map(key => {
                return <li key={key}><span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}</li>
            });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>Ingredients:</p>
                <ul>
                    {Ingredients}
                </ul>
                <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
                <Button clicked={props.canceled} type='Danger'>CANCEL</Button>
                <Button clicked={props.continued} type='Success'>CONTINUE</Button>
            </Aux>
        );
};

export default Summary;