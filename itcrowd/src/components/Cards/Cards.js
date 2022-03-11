import React, {useEffect} from "react";
import Card from "../Card/Card";
import {getAllProducts} from '../../redux/actions/index.js';
import {useDispatch, useSelector} from 'react-redux';

const Cards = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products)

    useEffect(()=>{
        dispatch(getAllProducts())
    },[dispatch])
    console.log('products',products)
    return(
        <div>
            {
                products?.map(e => <Card
                    key={e.id}
                    id={e.id}
                    img={e.image_url}
                    name={e.name}
                    price={e.price}
                />)
            }
        </div>
    )
}

export default Cards;