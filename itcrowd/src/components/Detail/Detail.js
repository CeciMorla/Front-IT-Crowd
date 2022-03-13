import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getProductById,getAllBrands,deleteProduct } from '../../redux/actions/index.js';
import { useParams, useHistory, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import swal from "sweetalert";

const Detail = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const product = useSelector(state => state.product)
    const brands = useSelector(state => state.brands)
    const {id} = useParams();
    const {isAuthenticated} = useAuth0();

    useEffect(()=>{
        dispatch(getProductById(id))
        dispatch(getAllBrands())
    },[dispatch,id])

    function handleDelete(e){
        e.preventDefault();
        dispatch(deleteProduct(id))
        swal('Delete!')
        history.push('/')
    }

    const filterBrand = brands?.find(e => e.id === product?.brandId)
    console.log('filterBrand',filterBrand)
    return(
        <div>
            <img src={filterBrand?.logo_url} alt='img'/>
            <h3>{filterBrand?.name}</h3>
            <img src={product?.image_url} alt='img'/>
            <h3>{product.name}</h3>
            <h4>{product.description}</h4>
            <h5>{product.price}</h5>
            {
                isAuthenticated &&
                <>
                <Link to={`/put/${id}`}>
                <button>Edit</button>
                </Link>
                <button onClick={handleDelete}>Delete</button>
                </>
            }
        </div>
    )
}

export default Detail;