import React from 'react'
import { Descriptions } from 'antd'

function InsuranceInfo(props) {

    let {insurance} = props;

    return (
        <div style={{margin:'2rem 2rem 2rem 2rem'}}>
            <Descriptions title="보험 정보" bordered>
                <Descriptions.Item label="상품분류">{insurance.GOOD_CLSF_NM}</Descriptions.Item>
                <Descriptions.Item label="상품명">{insurance.GOOD_ABNM}</Descriptions.Item>
                <Descriptions.Item label="개인단체구분">{insurance.PPSN_ASCT_DVSN}</Descriptions.Item>
                <Descriptions.Item label="금리연동구분">{insurance.RINT_LNKG_DVSN}</Descriptions.Item>
                <Descriptions.Item label="선납할인여부">{insurance.PPAM_DC_YN}</Descriptions.Item>
                <Descriptions.Item label="온라인보험여부">{insurance.INTN_ENTR_PSBL_YN}</Descriptions.Item>
                <Descriptions.Item label="보험기간(MIN)">{insurance.PINS_MIN}</Descriptions.Item>
                <Descriptions.Item label="보험기간(MAX)">{insurance.PINS_MAX}</Descriptions.Item>
                <Descriptions.Item label="단위코드">{insurance.UNIT_CODE}</Descriptions.Item>
            </Descriptions>
        </div>
    )
}

export default InsuranceInfo
