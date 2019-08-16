import React from 'react';

import styles from './controls.module.css';
import Control from './control/control';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const BuildControls = (props) => {
    return ( 
    <div className={styles.BuildControls}>
        <p>Current Price: {props.price.toFixed(2)}</p>
        {controls.map(control => {
            return <Control key={control.label} label={control.label}
            added={() => props.addIng(control.type)}
            remove={() => props.remIng(control.type)}
            disabled={props.disabled[control.type]}/>;
        })}
        <button onClick={props.ordered}
            className={styles.OrderButton} disabled={!props.canPurchase}>ORDER NOW</button>
    </div>
    );
};

export default BuildControls;