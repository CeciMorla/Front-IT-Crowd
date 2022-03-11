import { GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID, GET_ALL_BRANDS,ORDER_BY,FILTER_BY_BRAND } from "../index.js";

const initialState = {
    allProducts : [],
    products:[],
    product : {},
    brands : [],
    
};

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_ALL_PRODUCTS:
            return{
                ...state,
                products: action.payload,
                allProducts : action.payload
            }
        case GET_PRODUCT_BY_ID:
            return{
                ...state,
                product: action.payload
            }
        case GET_ALL_BRANDS:
            return{
                ...state,
                brands : action.payload
            }
        case ORDER_BY:
            let orderSort;
            if(action.payload === 'asc'){
               orderSort = state.products.sort(function(a,b){
                    if(a.name > b.name){
                        return 1;
                    }
                    if(b.name > a.name){
                        return -1;
                    }
                    return 0;
                })
            }else{
                orderSort = state.products.sort(function(a,b){
                    if(a.name > b.name){
                        return -1;
                    }
                    if(b.name > a.name){
                        return 1;
                    }
                    return 0;
                })
            }
            return{
                ...state,
                products : orderSort
            }
            case FILTER_BY_BRAND:
            let products = state.allProducts;
            let filterBrand = action.payload === 'allBrands' ? 
            products : products.filter((e)=> e.brandId ===(action.payload));
            return{
                ...state,
                products : filterBrand
            };    
        default: 
                return state;
        
    }
    
}

export default rootReducer;