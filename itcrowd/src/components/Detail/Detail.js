import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getProductById } from '../../redux/actions/index.js';
import { useParams } from "react-router-dom";

const Detail = () => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.product)
    const {id} = useParams();

    useEffect(()=>{
        dispatch(getProductById(id))
    },[dispatch,id])

    return(
        <div>
            <img src={product?.image_url} alt='img'/>
            <h3>{product.name}</h3>
            <h4>{product.description}</h4>
            <h5>{product.price}</h5>
        </div>
    )
}

export default Detail;