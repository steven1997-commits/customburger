import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (name) => {
    return {
        ingredientName: name,
        type: actionTypes.ADD_INGREDIENT
    };
};

export const removeIngredient = (name) => {
    return {
        ingredientName: name,
        type: actionTypes.REMOVE_INGREDIENT
    };
};

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
};

export const fetchFailed = () => {
    return {
        type: actionTypes.FETCH_FAILED
    }
};

//fetch the ingredients at the start
export const fetchIngredients = () => {
    return dispatch => {
        axios.get('https://burger-builder-ea013.firebaseio.com/ingredients.json')
            .then(res => {
                dispatch(setIngredients(res.data));
            }).catch(err => {
                dispatch(fetchFailed());
            });
    };
};

