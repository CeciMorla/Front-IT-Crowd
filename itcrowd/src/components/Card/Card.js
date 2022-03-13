import React from "react";
import { Link } from "react-router-dom";
import s from './Card.module.css';


const Card = ({img,price,name,id}) =>{
    
    return(
        <div className={s.container}>
            <Link to={`detail/${id}`} className={s.link}>
            <div >
                <img src={img} alt='img' className={s.img}/>
                <h5 className={s.name}>{name}</h5>
                <h5 className={s.price} >{price}</h5>
            </div>
            </Link>
        </div>
    )
}

export default Card;