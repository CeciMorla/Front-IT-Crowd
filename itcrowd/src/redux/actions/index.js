import axios from 'axios';
import {GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID, GET_ALL_BRANDS,ORDER_BY, FILTER_BY_BRAND} from '../index.js';

export const getAllProducts = () => {
    return function(dispatch){
        return  axios.get('https://back-it-crowd.herokuapp.com/products')
                .then(response => response.data)
                .then((data) =>{
                    dispatch({type: GET_ALL_PRODUCTS, payload: data})
                })
                .catch(error => console.log(error))
    }
}

export const getProductById = (id) => {
    return function(dispatch){
        return  axios.get(`https://back-it-crowd.herokuapp.com/products/${id}`)
                .then(response => response.data)
                .then((data) => {
                    dispatch({type: GET_PRODUCT_BY_ID, payload: data})
                })
                .catch(error => console.log(error))
    }
}

export const getAllBrands = () => {
    return function(dispatch){
        return  axios.get('https://back-it-crowd.herokuapp.com/brands')
                .then(response => response.data)
                .then((data) =>{
                    dispatch({type: GET_ALL_BRANDS, payload: data})
                })
                .catch(error => console.log(error))
    }
}


export const createProduct = (input) =>{
    return function(dispatch){
        return  axios.post('https://back-it-crowd.herokuapp.com/products',input)
                .then(response => response.data)
    }
}

export const deleteProduct = (id) =>{
    return function(dispatch){
        return  axios.delete(`https://back-it-crowd.herokuapp.com/products/${id}`)
                .then(response => response.data)
    }
}

export const putProduct = (id,changes) =>{
    return function(dispatch){
        return  axios.put(`https://back-it-crowd.herokuapp.com/products/${id}`,{changes})
                .then(response => response.data)
    }
}
export const orderBy = (payload) =>{

    return{
        type: ORDER_BY,
        payload: payload
    }
}

export const filterByBrand = (payload) =>{
    
    return{
        type: FILTER_BY_BRAND,
        payload: payload
    }
}