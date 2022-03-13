import React from "react";
import s from './Paginate.module.css';

const Paginate = ({qty,products,paginate})=>{
    const pageNumber = [];
    
    for (let i = 0; i <= Math.ceil(products/qty)-1; i++) {
        pageNumber.push(i+1);
        
    }
    
    return(
      
        <nav className={s.container}>
            <ul className={s.page}>
                {
                    pageNumber?.map(n =>(
                        <button onClick={()=>paginate(n)} key={n} className={s.button}>{n}</button>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Paginate;