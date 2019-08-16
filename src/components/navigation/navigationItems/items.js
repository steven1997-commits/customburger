import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './items.module.css';

const navItems = (props) => {
    return (
        <ul className={styles.NavigationItems}>
            <li className={styles.Item}>
                <NavLink activeClassName={styles.active} to='/orders'>Orders</NavLink>
            </li>
            <li className={styles.Item}>
                <NavLink activeClassName={styles.active} exact to='/'>Builder</NavLink>
            </li>
        </ul>
    );
};

export default navItems;