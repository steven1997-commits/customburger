import React from 'react';

import styles from './order.module.css';

const Order = (props) => {
    const ingredients = [];

    for (let ingredient in props.ingredients) {
        ingredients.push({
            name: ingredient,
            amount: props.ingredients[ingredient]
        });
    }

    const output = ingredients.map(ing => {
        return (
            <span style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }} key={ing.name}>{ing.name} ({ing.amount})</span>
        );
    });

    return (
    <div className={styles.Order}>
        <p>Ingredients: {output}</p>
        <p>Price: <strong>{Number.parseFloat(props.price).toFixed(2)} CAD</strong></p>
    </div>
    );
};

export default Order;