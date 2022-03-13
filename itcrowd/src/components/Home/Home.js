import React, {useEffect,useState} from 'react';
import Cards from '../Cards/Cards';
import NavBar from '../NavBar/NavBar';
import {getAllProducts,orderBy,filterByBrand} from '../../redux/actions/index.js';
import { useDispatch, useSelector } from 'react-redux';
import Paginate from '../Paginate/Paginate.js';


const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products)
    const [,setOrder] = useState('')
    const [currentPage,setCurrentPage] = useState(1);
    const qty = 8;
    const lastProduct = currentPage * qty; // 1 * 12 = 12
    const firstProduct = lastProduct - qty; // 12 - 12 = 0
    const currentProduct = products?.slice(firstProduct,lastProduct);
    

    const paginate = (page)=>{
        setCurrentPage(page)
    }

    
    useEffect(()=>{
        dispatch(getAllProducts())
    },[dispatch])
 
    function handleOrderSort(e){
        e.preventDefault();
        dispatch(orderBy(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
    }

    function handleFilterBrands(e){
        e.preventDefault();
        dispatch(filterByBrand(e.target.value));
        setCurrentPage(1);
        
    }
  
    return(
        <div>
            <NavBar 
                handleOrderSort={handleOrderSort}
                handleFilterBrands={handleFilterBrands} 
            />
            

            {
                currentProduct.length? (
                    <Cards currentProduct={currentProduct} />
                ) : (
                    <p></p>
                )
            }
            <Paginate qty={qty} products={products?.length} paginate={paginate}/>
        </div>
    )
}

export default Home;