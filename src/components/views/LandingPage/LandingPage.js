import React, {useEffect, useState} from 'react'
import { FaCode } from "react-icons/fa";
import { PRODUCT_API_URL, API_KEY } from '../../Config';
import axios from 'axios';
import MainImage from './Sections/MainImage';
import GridCards from '../commons/GridCards';
import { Button, Row } from 'antd';

function LandingPage() {

    const [InssuranceDatas, setInssuranceDatas] = useState([]);
    const [Insurances, setInsurances] = useState([]);
    const [MaxLength, setMaxLength] = useState(0);
    const [Cnt, setCnt] = useState(0);
    
    useEffect(() => {
        // const endpoint = `${PRODUCT_API_URL}?serviceKey=${API_KEY}&GOOD_ABNM=`;
        // fetch(endpoint)
        // .then(response => console.log(response));

        const request = axios.get(`${PRODUCT_API_URL}?serviceKey=${API_KEY}&GOOD_ABNM=`)
        .then(response => {

            const item = response.data.response.body.items.item;
            const maxLength = Math.floor(item.length/12) + 1;

            setMaxLength(maxLength);
            
            for (let i = 0; i < maxLength; i++) {
                InssuranceDatas[i] = [];
                for(let j = 0; j < 12; j++) {
                    InssuranceDatas[i][j] = item.shift(0);
                }
            }
            
            setInssuranceDatas(InssuranceDatas);
            setInsurances(InssuranceDatas[Cnt]);
        });

    }, []);

    const loadMore = () => {
        if(Cnt < MaxLength-1) {
            setCnt(Cnt+1);
            setInsurances([...Insurances, ...InssuranceDatas[Cnt+1]]);
        }
    };

    return (
        <>
            <div style={{width: '100%', margin: '0', padding: '30px'}}>

                {/* Main Image */}
                <MainImage />

                <div style={{width: '100%'}}>
                    <h2>Insurance by data.go.kr</h2>
                    <hr />

                    {/* grid */}
                    <Row gutter={[16, 16]}>
                        {Insurances && Insurances.map((i, index) => (
                            <React.Fragment key={index}>
                                {
                                    i? (
                                        <GridCards
                                            goodClsf={i.GOOD_CLSF_NM}
                                            goodAbnm={i.GOOD_ABNM}
                                        />
                                    ) : null
                                }
                            </React.Fragment>
                        ))}
                    </Row>

                </div>

                {
                    Cnt < MaxLength-1 ? (
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <Button type="primary" onClick={loadMore}>Load More</Button>
                        </div>
                    ) : null
                } 
            </div>
            {/* <div className="app">
                <FaCode style={{ fontSize: '4rem' }} /><br />
                <span style={{ fontSize: '2rem' }}>Let's Start Coding!</span>
            </div>
            <div style={{ float: 'right' }}>Thanks For Using This Boiler Plate by John Ahn</div> */}
        </>
    )
}

export default LandingPage
