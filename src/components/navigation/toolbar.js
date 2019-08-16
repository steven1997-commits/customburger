import React from 'react';

import styles from './toolbar.module.css';
import Logo from '../logo/logo';
import NavigationItems from './navigationItems/items';
import DrawerToggle from './sidedrawer/drawertoggle';

const ToolBar = (props) => {
    return (
        <header className={styles.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked}/>
            <div className={styles.Logo}>
                <Logo/>
            </div>
            <nav className={styles.DesktopOnly}>
                <NavigationItems/>
            </nav>
        </header>
    );
}

export default ToolBar;