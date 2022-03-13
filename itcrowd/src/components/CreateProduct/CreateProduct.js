import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {createProduct,getAllProducts} from '../../redux/actions/index.js';
import { useHistory } from "react-router-dom";
import swal from "sweetalert";


const CreateProduct = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const products = useSelector(state => state.allProducts)
    const [input,setInput] = useState({name:"",description:"",image_url:"",price:""});
    

    useEffect(()=>{
        dispatch(getAllProducts())
    },[dispatch])

    function handleChange(e){
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        
    }

    function onSubmit(e){
        const findProduct = products.find(e => e.name === input.name)
        if(findProduct){
            swal("Existing Product");
            history.push('/')
        }else{
            e.preventDefault()
            dispatch(createProduct(input))
            setInput({name:'',description:'',image_url:'',price:''})
            swal('Created!')
            history.push('/')
        }
        
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <label>Name</label>
                <input
                type='text'
                value={input.name}
                name='name'
                placeholder='Name...'
                onChange={handleChange}
                />
                <label>Description</label>
                <input
                type='text'
                value={input.description}
                name='description'
                placeholder='Description...'
                onChange={handleChange}
                />
                <label>Image</label>
                <input
                type='text'
                value={input.image_url}
                name='image_url'
                placeholder='http://...'
                onChange={handleChange}
                />
                <label>Price</label>
                <input
                type='text'
                value={input.price}
                name='price'
                placeholder='$...'
                onChange={handleChange}
                />
                <button type="submit">Create</button>
                
            </form>
        </div>
    )

}

export default CreateProduct;