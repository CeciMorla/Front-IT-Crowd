import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllBrands} from '../../redux/actions/index.js';
import Login from "../Login/Login.js";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../Profile.js/Profile.js";
import Logout from "../Logout/Logout.js";
import s from './NavBar.module.css';
import img from './img/logo.png';

const NavBar = ({handleOrderSort,handleFilterBrands}) => {
    const dispatch = useDispatch();
    const brands = useSelector(state => state.brands);
    const {isAuthenticated} = useAuth0();

    useEffect(()=>{
        dispatch(getAllBrands())
    },[dispatch]);

    

    return(
        <div className={s.container}>
            <div className={s.containerlogo}>
            <img src={img} alt='logo' className={s.logo}/>
            </div>
            <div className={s.divSelectors}>
            <select onChange={(e)=> handleOrderSort(e)} className={s.selectOne}>
                <option value='asc'>A-Z</option>
                <option value='des'>Z-A</option>
            </select>
            
            
            <select onChange={(e)=> handleFilterBrands(e)} className={s.selectTwo}>
                <option value='allBrands'>All</option>
                {
                    brands?.map(e=>{
                        return (
                            <option value={e.id.toString()} key={e.id}>
                                {e.name}
                            </option>
                        )
                    })
                }
                    
            </select>
            </div>
            <div>
            {
                isAuthenticated ?
                    <>
                    <Profile/>
                    <Logout/>
                    </> :
                    <Login/>
            }
                
            </div>
        </div>
    )
}

export default NavBar;