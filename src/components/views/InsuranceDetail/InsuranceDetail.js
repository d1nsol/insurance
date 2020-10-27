import React, { useEffect, useState } from 'react'
import { Button } from 'antd';
import InsuranceInfo from './Sections/InsuranceInfo';
import { product } from '../../../_actions/insurance_actions';
import { useDispatch } from "react-redux";

function InsuranceDetail(props) {
    const dispatch = useDispatch();

    let goodAbnm = props.match.params.goodAbnm;
    const [Insurance, setInsurance] = useState([]);

    useEffect(() => {

        let body = {goodAbnm: `${goodAbnm}`};
        dispatch(product(body))
            .then(response => {
                console.log(response.payload.products);
                setInsurance(response.payload.products[0])
            });

    }, [])

    return (
        <div>
            {/* Header */}
            {/* Body */}
            <div style={{widh: '85%', margin: '1rem auto'}}>

                {/* Insurance Info */}
                <InsuranceInfo
                    insurance={Insurance}
                />

                <br/>
                {/* Grid */}

                <div style={{display: 'flex', justifyContent: 'center', margin: '2rem'}}>
                    <Button type="primary">More</Button>
                </div>
            </div>
        </div>
    )
}

export default InsuranceDetail
