import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseSuccess = (id, order) => {
    return {
        type: actionTypes.PURCHASE_SUCCESS,
        id: id,
        order: order
    }
};

export const purchaseFail = (error) => {
    return {
        type: actionTypes.PURCHASE_FAIL,
        error: error
    }
};

export const purchaseStart = () => {
    return {
        type: actionTypes.PURCHASE_START
    };
}

export const purchaseBurger = (order) => {
    return dispatch => {
        dispatch(purchaseStart());
        axios.post('/orders.json', order)
            .then(res => {
                dispatch(purchaseSuccess(res.data.name,order));
            })
            .catch(error => {
                dispatch(purchaseFail(error));
            });
    }
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    };
}

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    };
}

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    };
}

export const fetchOrdersInit = () => {
    return {
        type: actionTypes.FETCH_ORDERS_INIT
    };
}

export const fetchOrders = () => {
    return dispatch => {
        dispatch(fetchOrdersInit());
        axios.get('/orders.json')
        .then(res => {
            const fetched = [];
            for (let key in res.data) {
                fetched.push({
                    ...res.data[key],
                    id: key
                });
            }
            dispatch(fetchOrdersSuccess(fetched));
        })
        .catch(res => {
            dispatch(fetchOrdersFail(res))
        });
    };
};