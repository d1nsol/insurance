import React, { useEffect, useState } from 'react'
import { Button, Descriptions, Spin } from 'antd';
import InsuranceInfo from './Sections/InsuranceInfo';
import { product, terms } from '../../../_actions/insurance_actions';
import { useDispatch } from "react-redux";
import Modal from 'antd/lib/modal/Modal';
import moment from 'moment';

function InsuranceDetail(props) {
    const dispatch = useDispatch();

    let goodAbnm = props.match.params.goodAbnm;
    const [Insurance, setInsurance] = useState([]);
    const [Terms, setTerms] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [Visible, setVisible] = useState(false);

    useEffect(() => {

        let body = {goodAbnm: `${goodAbnm}`};
        dispatch(product(body))
            .then(response => {
                console.log(response.payload.products);
                setInsurance(response.payload.products[0])
            });

    }, [])

    const showModal = () => {
        setVisible(true);
        setLoading(true);

        let body = {goodNm: `${goodAbnm}`};
        dispatch(terms(body))
            .then(reponse => {
                console.log(reponse.payload.terms);
                setTerms(reponse.payload.terms[0]);
                setLoading(false);
            });
        
    };

    const handleOk = () => {
        setVisible(false);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const openTerms = () => {
        window.open(Terms.LK_URL);
    };

    const getDate = (date) => {
        return moment(date, 'YYYYMMDD').format('YYYY-MM-DD');
    };

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
                    <Button type="primary" onClick={showModal}>
                        약관 정보
                    </Button>
                    {
                        <Modal
                            title="약관 정보"
                            visible={Visible}
                            onOk={handleOk}
                            onCancel={handleCancel}>
                            {
                                Loading ? (
                                    <div style={{display: 'flex', justifyContent: 'center', margin: '2rem'}}>
                                        <Spin tip="Loading..." size="large" type="info" />
                                    </div>
                                ) : (
                                    <div style={{margin:'2rem 2rem 2rem 2rem'}}>
                                        <Descriptions bordered layout="vertical">
                                            <Descriptions.Item label="적용시작일자">{getDate(Terms.APLY_STRT_DATE)}</Descriptions.Item>
                                            <Descriptions.Item label="적용종료일자">{getDate(Terms.APLY_END_DATE)}</Descriptions.Item>
                                            <Descriptions.Item label="약관설명">
                                                <Button type="primary" onClick={openTerms}>
                                                    약관(pdf)
                                                </Button>
                                            </Descriptions.Item>
                                        </Descriptions>
                                    </div>
                                )
                            }    
                        </Modal>
                    }
                </div>
            </div>
        </div>
    )
}

export default InsuranceDetail
