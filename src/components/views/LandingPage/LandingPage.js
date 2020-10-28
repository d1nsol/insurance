import React, {useEffect, useState} from 'react'
import MainImage from './Sections/MainImage';
import GridCards from '../commons/GridCards';
import { Button, Row } from 'antd';
import { product } from '../../../_actions/insurance_actions';
import { useDispatch } from "react-redux";

function LandingPage() {
    const dispatch = useDispatch();
    const [InssuranceDatas, setInssuranceDatas] = useState([]);
    const [Insurances, setInsurances] = useState([]);
    const [MaxLength, setMaxLength] = useState(0);
    const [Cnt, setCnt] = useState(0);
    
    useEffect(() => {

        let body = {goodAbnm: ''};
        dispatch(product(body))
            .then(response => {
                console.log(response.payload.products);

                const products = response.payload.products;
                const maxLength = Math.floor(products.length/12) + 1;

                setMaxLength(maxLength);
                
                for (let i = 0; i < maxLength; i++) {
                    InssuranceDatas[i] = [];
                    for(let j = 0; j < 12; j++) {
                        InssuranceDatas[i][j] = products.shift(0);
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
                    <div style={{margin: '1rem', position: 'relative'}}>
                        <h2>Insurance by data.go.kr</h2>
                    </div>
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
