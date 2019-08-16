import React from 'react';

import BurgerLogo from '../../assets/images/burger-logo.png';
import styles from './logo.module.css';

const Logo = (props) => {
    return (
        <div className={styles.Logo}>
            <img src={BurgerLogo} alt='Logo'/>
        </div>
    );
};

export default Logo;