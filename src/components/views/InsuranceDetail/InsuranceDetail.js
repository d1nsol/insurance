import React, { useEffect, useState } from 'react'
import { API_KEY, PRODUCT_API_URL } from '../../Config'
import axios from 'axios';
import { Button } from 'antd';
import InsuranceInfo from './Sections/InsuranceInfo';

function InsuranceDetail(props) {

    let goodAbnm = props.match.params.goodAbnm;
    const [Insurance, setInsurance] = useState([]);

    useEffect(() => {

        const request = axios.get(`${PRODUCT_API_URL}?serviceKey=${API_KEY}&GOOD_ABNM=${goodAbnm}`)
        .then(response => {

            const item = response.data.response.body.items.item;
            console.log(item[0]);

            setInsurance(item[0]);
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
