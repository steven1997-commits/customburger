import React from 'react';

import styles from './control.module.css';

const control = (props) => {
    return ( 
        <div className={styles.BuildControl}>
            <div className={styles.Label}>{props.label}</div>
            <button className={styles.Less} onClick={props.remove} disabled={props.disabled}>Less</button>
            <button className={styles.More} onClick={props.added}>More</button>
        </div>
    );
};

export default control;