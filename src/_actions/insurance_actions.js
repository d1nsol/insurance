import axios from 'axios';
import { INSURANCE_SERVER } from '../components/Config';
import { PRODUCT_INSURANCE, TEMRS_INSURANCE, FEE_INSURANCE } from './types';

export function product(dataToSubmit) {
    const request = axios.post(`${INSURANCE_SERVER}/product`, dataToSubmit)
        .then(response => response.data);
    return {
        type: PRODUCT_INSURANCE,
        payload: request
    }
}