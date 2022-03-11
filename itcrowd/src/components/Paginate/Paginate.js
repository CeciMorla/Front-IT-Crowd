import React from "react";
//import style from './Paged.module.css';

const Paginate = ({qty,products,paginate})=>{
    const pageNumber = [];
    
    for (let i = 0; i <= Math.ceil(products/qty)-1; i++) {
        pageNumber.push(i+1);
        
    }
    
    return(
      
        <nav >
            <ul>
                {
                    pageNumber?.map(n =>(
                        <button onClick={()=>paginate(n)} key={n}>{n}</button>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Paginate;