import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {createProduct,getAllProducts} from '../../redux/actions/index.js';
import { useHistory, Link } from "react-router-dom";
import swal from "sweetalert";
import s from './CreateProduct.module.css';


const CreateProduct = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const products = useSelector(state => state.allProducts)
    const [input,setInput] = useState({name:"",description:"",image_url:"",price:""});
    console.log(input.price)

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
            <Link to='/'>
            <button className={s.back}>Back</button>
            </Link>
            <form onSubmit={onSubmit} className={s.form}>
                <label className={s.name}>Name</label>
                <input
                type='text'
                value={input.name}
                name='name'
                placeholder='Name...'
                onChange={handleChange}
                className={s.inputName}
                />
                <label className={s.description}>Description</label>
                <input
                type='text'
                value={input.description}
                name='description'
                placeholder='Description...'
                onChange={handleChange}
                className={s.inputDescription}
                />
                <label className={s.image}>Image</label>
                <input
                type='text'
                value={input.image_url}
                name='image_url'
                placeholder='http://...'
                onChange={handleChange}
                className={s.inputImage}
                />
                <label className={s.price}>Price</label>
                <input
                type='text'
                value={input.price}
                name='price'
                placeholder='$...'
                onChange={handleChange}
                className={s.inputPrice}
                />
                <button type="submit" className={s.create}>Create</button>
                
            </form>
        </div>
    )

}

export default CreateProduct;