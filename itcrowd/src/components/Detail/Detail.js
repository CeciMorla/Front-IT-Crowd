import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getProductById,getAllBrands,deleteProduct } from '../../redux/actions/index.js';
import { useParams, useHistory, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import swal from "sweetalert";
import s from './Detail.module.css';

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
            <Link to='/'>
            <button className={s.back}>Back</button>
            </Link>
            <img src={filterBrand?.logo_url} alt='img' className={s.logo}/>
            {/*<h3 className={s.brand}>{filterBrand?.name}</h3>*/}
            <div className={s.divproduct}>
            <img src={product?.image_url} alt='img'className={s.product}/>
            </div>
            <div className={s.info}>
            <h3 className={s.name}>{product?.name}</h3>
            <div className={s.descriptiondiv}>
            <h4 className={s.description}>{product?.description}</h4>
            </div>
            <h5 className={s.price}>{product?.price}</h5>
            
            {
                isAuthenticated &&
                <>
                <Link to={`/put/${id}`}>
                <button className={s.buttonedit}>Edit</button>
                </Link>
                <button onClick={handleDelete} className={s.buttondelete}>Delete</button>
                </>
            }
            </div>
        </div>
    )
}

export default Detail;