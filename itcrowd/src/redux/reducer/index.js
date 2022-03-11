import { GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID } from "../index.js";

const initialState = {
    products : [],
    product : {},
    
};

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_ALL_PRODUCTS:
            return{
                ...state,
                products: action.payload
            }
        case GET_PRODUCT_BY_ID:
            return{
                ...state,
                product: action.payload
            }    
        default: 
                return state;
        
    }
    
}

export default rootReducer;