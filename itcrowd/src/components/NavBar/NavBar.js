import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllBrands} from '../../redux/actions/index.js';
import Login from "../Login/Login.js";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../Profile.js/Profile.js";
import Logout from "../Logout/Logout.js";

const NavBar = ({handleOrderSort,handleFilterBrands}) => {
    const dispatch = useDispatch();
    const brands = useSelector(state => state.brands);
    const {isAuthenticated} = useAuth0();

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
            <div>
            <select onChange={(e)=> handleFilterBrands(e)}>
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