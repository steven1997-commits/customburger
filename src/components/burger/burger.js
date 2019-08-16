import React from 'react';
import { withRouter } from 'react-router-dom';

import Ingredient from './ingredient/ingredient';
import styles from './burger.module.css'
import { arrayExpression } from '../../../node_modules/@babel/types';

const Burger = (props) => {
    //this transforms ingredients from object to an array of keys
    let ingredients = Object.keys(props.ingredients)
        .map(key => {
            return [...Array(props.ingredients[key])].map((_,index) => {
                return <Ingredient key={key + index} type={key}/>;
            });
        })
        .reduce((ar,el) => {
            return ar.concat(el);
        }, []);

    if(ingredients.length === 0){
        ingredients = <p>Please start entering ingredients</p>;
    }

    return (
        <div className={styles.Burger}>
            <Ingredient type='bread-top'/>
            {ingredients}
            <Ingredient type='bread-bottom'/>
        </div>
    );
};

export default withRouter(Burger);