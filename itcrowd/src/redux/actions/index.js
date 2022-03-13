import axios from 'axios';
import {GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID, GET_ALL_BRANDS,ORDER_BY, FILTER_BY_BRAND,GET_ALL_ADMINS} from '../index.js';

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

export const getAllBrands = () => {
    return function(dispatch){
        return  axios.get('http://localhost:3001/brands')
                .then(response => response.data)
                .then((data) =>{
                    dispatch({type: GET_ALL_BRANDS, payload: data})
                })
                .catch(error => console.log(error))
    }
}

export const getAllAdmins = () => {
    return function(dispatch){
        return  axios.get('http://localhost:3001/admins')
                .then(response => response.data)
                .then((data) =>{
                    dispatch({type:GET_ALL_ADMINS, payload:data})
                })
                .catch(error => console.log(error))
    }
}

export const createProduct = (input) =>{
    return function(dispatch){
        return  axios.post('http://localhost:3001/products',input)
                .then(response => response.data)
    }
}

export const deleteProduct = (id) =>{
    return function(dispatch){
        return  axios.delete(`http://localhost:3001/products/${id}`)
                .then(response => response.data)
    }
}

export const putProduct = (id,changes) =>{
    return function(dispatch){
        return  axios.put(`http://localhost:3001/products/${id}`,{changes})
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