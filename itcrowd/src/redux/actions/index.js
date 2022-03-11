import axios from 'axios';
import {GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID} from '../index.js';

export const getAllProducts = () => {
    return function(dispatch){
        return  axios.get('http://localhost:3001/products')
                .then(response => response.data)
                .then((data) =>{
                    dispatch({type: GET_ALL_PRODUCTS, payload: data})
                })
                .catch(error => console.log(error))
    }
}

export const getProductById = (id) => {
    return function(dispatch){
        return  axios.get(`http://localhost:3001/products/${id}`)
                .then(response => response.data)
                .then((data) => {
                    dispatch({type: GET_PRODUCT_BY_ID, payload: data})
                })
                .catch(error => console.log(error))
    }
}