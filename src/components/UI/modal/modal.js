import React , { Component } from 'react';

import styles from './modal.module.css';
import Aux from '../../../hoc/auxiliary';
import BackDrop from '../backdrop/backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps,nextState){
        //normally should check for other properties as well
        if(nextProps.show !== this.props.show || nextProps.children !== this.props.children){
            return true;
        }
        return false;
    }

    render(){
    return ( 
        <Aux>
            <BackDrop show={this.props.show} clicked={this.props.closeModal}/>
            <div className={styles.Modal} style={{
                transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: this.props.show? '1' : '0' }}>
                {this.props.children}
            </div>
        </Aux>
    );
    }
};

export default Modal