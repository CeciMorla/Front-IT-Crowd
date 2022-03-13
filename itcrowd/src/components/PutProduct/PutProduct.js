import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";
import {putProduct,getProductById} from '../../redux/actions/index.js';
import swal from "sweetalert";
import s from './PutProduct.module.css';

const PutProduct = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {id} = useParams();
    const product = useSelector(state => state.product);
    const [changes,setChanges] = useState({price:''})
    const [button,setButton] = useState(false)
    
    console.log(changes)
    useEffect(() =>{
        dispatch(getProductById(id))
    },[dispatch,id]);

    function handleClick(e){
        e.preventDefault();
        setButton(true)
    }

    

    function handleChange(e){
        e.preventDefault();
        setChanges({
            price: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(putProduct(id,changes))
        setChanges('')
        swal('Edit with success!')
        history.push('/')
    }

    return(
        <div>
            <Link to='/'>
            <button className={s.back}>Back</button>
            </Link>
            <form onSubmit={handleSubmit}>
            <button onClick={handleClick} disabled={button} className={s.button}>Edit!</button>
                <label className={s.name}>Name</label>
                    <input
                        readOnly='readOnly'
                        type='text'
                        name='name'
                        value={product.name}
                        className={s.inputName}
                    /> 
                <label className={s.description}>Description</label>
                    <input
                        readOnly='readOnly'
                        type='text'
                        name='description'
                        value={product.description}
                        className={s.inputDescription}
                    /> 
                <label className={s.image}>Image</label>
                    <input
                        readOnly='readOnly'
                        type='text'
                        name='description'
                        value={product.image_url}
                        className={s.inputImage}
                    /> 
                <label className={s.price}>Price</label>
                {
                    button === false? 
                    <input
                        readOnly='readOnly'
                        type='text'
                        name='price'
                        value={product.price}
                        className={s.inputPrice}
                    /> :
                    <input
                        type='text'
                        name='price'
                        value={changes.price}
                        onChange={handleChange}
                        className={s.inputPrice}
                    />
                }
                <button type="submit" className={s.confirm}>Confirm!</button>
            </form>
        </div>
    )

}

export default PutProduct;