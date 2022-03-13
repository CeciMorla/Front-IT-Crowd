import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {putProduct,getProductById} from '../../redux/actions/index.js';
import swal from "sweetalert";

const PutProduct = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {id} = useParams();
    const product = useSelector(state => state.product);
    const [changes,setChanges] = useState({name:'',description:'',image_url:'',price:''})
    const [button,setButton] = useState(false)
    
    
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
            ...changes,
            [e.target.name] : e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(putProduct(id,changes))
        setChanges({name:'',description:'',image_url:'',price:''})
        swal('Edit with success!')
        history.push('/')
    }

    return(
        <div>
            
            <form onSubmit={handleSubmit}>
            <button onClick={handleClick} disabled={button}>Edit!</button>
                <label>Name</label>
                
                {
                    button === false? 
                    <input
                        readOnly='readOnly'
                        type='text'
                        name='name'
                        value={product.name}
                        
                    /> :
                    <input
                        type='text'
                        name='name'
                        value={changes.name}
                        onChange={handleChange}
                    />
                }
                <label>Description</label>
                
                {
                    button === false? 
                    <input
                        readOnly='readOnly'
                        type='text'
                        name='description'
                        value={product.description}
                        
                    /> :
                    <input
                        type='text'
                        name='description'
                        value={changes.description}
                        onChange={handleChange}
                    />
                }
                <label>Image</label>
                
                {
                    button === false? 
                    <input
                        readOnly='readOnly'
                        type='text'
                        name='description'
                        value={product.image_url}
                        
                    /> :
                    <input
                        type='text'
                        name='description'
                        value={changes.image_url}
                        onChange={handleChange}
                    />
                }
                <label>Price</label>
                
                {
                    button === false? 
                    <input
                        readOnly='readOnly'
                        type='text'
                        name='price'
                        value={product.price}
                        
                    /> :
                    <input
                        type='text'
                        name='price'
                        value={changes.price}
                        onChange={handleChange}
                    />
                }
                <button type="submit">Confirm!</button>
            </form>
        </div>
    )

}

export default PutProduct;