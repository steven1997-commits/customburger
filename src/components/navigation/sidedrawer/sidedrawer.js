import React from 'react';

import Logo from '../../logo/logo';
import NavigationItems from '../navigationItems/items';
import styles from './sidedrawer.module.css';
import Backdrop from '../../UI/backdrop/backdrop';
import Aux from '../../../hoc/auxiliary';

const SideDrawer = (props) => {
    let attachedClasses = [styles.SideDrawer , styles.Closed];
    if(props.open){
        attachedClasses = [styles.SideDrawer , styles.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={styles.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
};

export default SideDrawer;