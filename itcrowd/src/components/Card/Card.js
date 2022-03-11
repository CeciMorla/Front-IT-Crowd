import React from "react";
import { Link } from "react-router-dom";

const Card = ({img,price,name,id}) =>{
    console.log('name', name)
    return(
        <div>
            <Link to={`/${id}`}>
            <div>
                <img src={img} alt='img'/>
                <h5>{name}</h5>
                <h5>{price}</h5>
            </div>
            </Link>
        </div>
    )
}

export default Card;