import {
    PRODUCT_INSURANCE,
    TEMRS_INSURANCE,
    FEE_INSURANCE
} from '../_actions/types';

export default function(state={},action){
    switch(action.type){
        case PRODUCT_INSURANCE:
            return {...state, products: action.payload }
        // case TEMRS_INSURANCE:
        //     return { ...state, products: action.payload }
        // case FEE_INSURANCE:
        //     return {...state, fee: action.payload }
        default:
            return state;
    }
}