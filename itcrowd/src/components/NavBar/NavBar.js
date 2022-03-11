import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllBrands} from '../../redux/actions/index.js';

const NavBar = ({handleOrderSort}) => {
    const dispatch = useDispatch();
    const brands = useSelector(state => state.brands);

    useEffect(()=>{
        dispatch(getAllBrands())
    },[dispatch]);

    

    return(
        <div>
            <div>
            <select onChange={(e)=> handleOrderSort(e)}>
                <option value='asc'>A-Z</option>
                <option value='des'>Z-A</option>
            </select>
            </div>
        </div>
    )
}

export default NavBar;